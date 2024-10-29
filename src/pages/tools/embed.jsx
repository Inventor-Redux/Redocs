import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import "react-dropdown/style.css";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { hyperLink } from "@uiw/codemirror-extensions-hyper-link";
import Loading from "@site/src/components/Loading";
import { parser, htmlOutput, toHTML } from '@odiffey/discord-markdown';
import validation from "ajv/dist/vocabularies/validation";
class result {
  constructor(value) {
    this.value = value;
  }
}
export default function () {
  const { useState, useRef, useEffect } = require("react");
  const Content = useRef(null)
  const Ajv = require("ajv");
  const ajv = new Ajv();
  const validator = require("validator");
  const [date, setDate] = useState(new Date(Date.now()));
  const schema = {
    type: "object",
    properties: {
      content: { type: "string", maxLength: 2000 },
      embeds: {
        type: "array",
        maxItems: 1,
        minItems: 1,
        items: [
          {
            type: "object",
            properties: {
              title: { type: "string", maxLength: 256 },
              description: { type: "string", maxLength: 4000 },
              url: { type: "string" },
              color: { type: "integer" },
              image: {
                type: "object",
                properties: {
                  url: { type: "string" },
                },
                required: ["url"],
              },
              thumbnail: {
                type: "object",
                properties: {
                  url: { type: "string" },
                },
                required: ["url"],
              },
              author: {
                type: "object",
                properties: {
                  name: { type: "string", maxLength: 256 },
                  icon_url: { type: "string" },
                  url: { type: "string" },
                },
                if: { properties: { icon_url: { minLength: 1 , type: "string"} } },
                then: { required: ["name"] },
                if: { properties: { url: { minLength: 1 , type: "string"} } },
                then: { required: ["name"] },
              },
              footer: {
                type: "object",
                properties: {
                  text: { type: "string", maxLength: 2048 },
                },
                required: ["text"],
              },
            },
          },
        ],
      },
    },
  };
  function parseInstancePath(path) {
    const segments = path.split("/");
    segments.shift();
    const parsedSegments = segments.map((segment, index) => {
      if (validator.isNumeric(segment)) {
        return `[${segment}]`;
      } else if (index != 0) {
        return `.${segment}`;
      } else {
        return `${segment}`;
      }
    });
    return parsedSegments.join("");
  }
  function parseMentions(value) {
    let output = value.replaceAll(/&lt;@[0-9]{17,20}&gt;/g, '<span class="bg-[#5865f298] text-center whitespace-nowrap font-medium p-[2px] text-[#c9cdfb] rounded-md hover:bg-[#5864f2] hover:text-white">@user</span>')
    output = output.replaceAll(/@everyone/g, '<span class="bg-[#5865f298] text-center whitespace-nowrap font-medium p-[2px] text-[#c9cdfb] rounded-md hover:bg-[#5864f2] hover:text-white">@everyone</span>')
    output = output.replaceAll(/@here/g, '<span class="bg-[#5865f298] align-middle leading-3 text-center whitespace-nowrap font-medium text-[#c9cdfb] rounded-md hover:bg-[#5864f2] hover:text-white", style="padding: 1px 2px 2px 2px;">@here</span>')
    // output = [...value.matchAll(/<@&[0-9]{17,20}>/)]
    // const channelMentions = [...value.matchAll(/<#[0-9]{17,20}>/)]
    // const slashMentions = [...value.matchAll(/<\/[a-z]{1,32}:[0-9]{17,20}>/)]  
    return value
  }
  function checkDate() {
    setDate(new Date(Date.now()));
  }
  const validate = ajv.compile(schema);
  const [data, setData] = useState({
    content: {
      content: "",
      title: "",
      url: "",
      description: "",
      color: "#000000",
      username: "",
      avatar: "",
      authorUrl: "",
      thumbnail: "",
      image: "",
      footer: "",
      json: "{}",
    },
    validation: {
      title: false,
      url: false,
      username: false,
      avatar: false,
      authorUrl: false,
      thumbnail: false,
      image: false,
      json: true,
      jsonError: [],
    },
    validators: {
      content: (value) => {
        return validator.isLength(value, { max: 1999 });
      },
      title: (value) => {
        return validator.isLength(value, { max: 255 });
      },
      description: (value) => {
        return validator.isLength(value, { max: 4095 });
      },
      url: (value) => {
        return value === undefined
          ? undefined
          : validator.isURL(value, {
              require_valid_protocol: true,
              require_host: true,
              require_protocol: true,
            });
      },
      username: (value) => {
        return validator.isLength(value, { max: 255 });
      },
      avatar: (value) => {
        return value === undefined
          ? undefined
          : validator.isURL(value, {
              require_valid_protocol: true,
              require_host: true,
              require_protocol: true,
            });
      },
      authorUrl: (value) => {
        return value === undefined
          ? undefined
          : validator.isURL(value, {
              require_valid_protocol: true,
              require_host: true,
              require_protocol: true,
            });
      },
      thumbnail: (value) => {
        return value === undefined
          ? undefined
          : validator.isURL(value, {
              require_valid_protocol: true,
              require_host: true,
              require_protocol: true,
            });
      },
      image: (value) => {
        return value === undefined
          ? undefined
          : validator.isURL(value, {
              require_valid_protocol: true,
              require_host: true,
              require_protocol: true,
            });
      },
      json: (value) => {
        const VALIDJSON = validator.isJSON(value);
        if (!VALIDJSON) {
          return { valid: false, reasons: ["Invalid JSON"] };
        } else if (!validate(JSON.parse(value))) {
          return {
            valid: false,
            reasons: validate.errors.map((error) => {
              return `${parseInstancePath(error.instancePath)} ${
                error.message
              }`;
            }),
          };
        }
        return { valid: true };
      },
    },
  });
  return (
    <BrowserOnly
      fallback={
        <Loading />
      }
    >
      {() => {
        const pretty = require("pretty-data");
        const { Sketch, ColorResult } = require("@uiw/react-color");
        require("./index.module.css");
        require("boxicons");
        const { Tab, TabList, TabPanel, Tabs } = require("react-tabs");
        require("react-tabs/style/react-tabs.css");
        const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
        const {
          faCircleQuestion,
        } = require("@fortawesome/free-regular-svg-icons");

        setInterval(checkDate, 1000);
        function handleChange(e) {
          if (e instanceof Object && !(e instanceof result)) {
            setData({
              ...data,
              content: { ...data.content, [e.target.name]: e.target.value },
              validation: {
                ...data.validation,
                ...(true ? { url: data.validators.url(e.target.value) } : {}),
                ...(e.target.name == "avatar" && {
                  avatar: data.validators.avatar(e.target.value),
                }),
                ...(e.target.name == "authorUrl" && {
                  authorUrl: data.validators.authorUrl(e.target.value),
                }),
                ...(e.target.name == "image" && {
                  image: data.validators.image(e.target.value),
                }),
                ...(e.target.name == "thumbnail" && {
                  thumbnail: data.validators.thumbnail(e.target.value),
                }),
                ...(e.target.name == "title" && {
                  title: e.target.value.length >= 1,
                }),
                ...(e.target.name == "username" && {
                  username: e.target.value.length >= 1,
                }),
              },
            });
          } else if (typeof e === "string") {
            const validJson = data.validators.json(e);
            console.log(validJson);

            if (validJson.valid) {
              const parseJson = JSON.parse(e);
              function colorConvert(value) {
                if (value === undefined || null) {
                  return "#000000";
                }
                let hex = value.toString(16);
                while (hex.length < 6) {
                  hex = "0" + hex;
                }
                return "#" + hex;
              }
              const newContent = {
                json: e ?? "",
                content: parseJson?.content ?? "",
                title: parseJson?.embeds?.[0]?.title ?? "",
                username: parseJson?.embeds?.[0]?.author?.name ?? "",
                authorUrl: parseJson?.embeds?.[0]?.author?.url ?? "",
                avatar: parseJson?.embeds?.[0]?.author?.icon_url ?? "",
                description: parseJson?.embeds?.[0]?.description ?? "",
                url: parseJson?.embeds?.[0]?.url ?? "",
                image: parseJson?.embeds?.[0]?.image?.url ?? "",
                thumbnail: parseJson?.embeds?.[0]?.thumbnail?.url ?? "",
                footer: parseJson?.embeds?.[0]?.footer?.text ?? "",
                color: colorConvert(parseJson?.embeds?.[0]?.color),
              };
              const newValidation = {
                title: parseJson?.embeds?.[0]?.title?.length >= 1 ?? false,
                username:
                  parseJson?.embeds?.[0]?.author?.name?.length >= 1 ?? false,
                authorUrl:
                  data.validators.authorUrl(
                    parseJson?.embeds?.[0]?.author?.url
                  ) ?? false,
                avatar:
                  data.validators.avatar(
                    parseJson?.embeds?.[0]?.author?.icon_url
                  ) ?? false,
                url: data.validators.url(parseJson?.embeds?.[0]?.url) ?? false,
                image:
                  data.validators.image(parseJson?.embeds?.[0]?.image?.url) ??
                  false,
                thumbnail:
                  data.validators.thumbnail(
                    parseJson?.embeds?.[0]?.thumbnail?.url
                  ) ?? false,
              };
              setData({
                ...data,
                content: { ...data.content, ...newContent },
                validation: {
                  ...data.validation,
                  json: true,
                  jsonError: [],
                  ...newValidation,
                },
              });
            } else {
              setData({
                ...data,
                content: { ...data.content, json: e },
                validation: {
                  ...data.validation,
                  json: false,
                  jsonError: validJson.reasons,
                },
              });
            }
          } else if (e instanceof result) {
            setData({ ...data, content: { ...data.content, color: e.value } });
          } else {
            console.error("Change handler used incorrectly");
          }
        }
        return (
          <Layout>
            <div className="grid flex-grow max-w-full max-h-full grid-cols-2 grid-rows-1 m-4 rounded-lg xl:grid-cols-2">
              <div className="my-2 ml-2 mr-1 bg-[#313338] rounded-md  border-y-0 border-x-0 min-w-0 min-h-0 max-h-fit box-border h-fit">
                <Tabs
                  selectedTabClassName="bg-[#fdbd24] rounded-t-md text-black"
                  defaultFocus={false}
                  focusTabOnClick={false}
                >
                  <TabList
                    className={`bg-zinc-800 grid grid-cols-3 text-center rounded-t-md pl-0 max-h-fit mb-0`}
                  >
                    <Tab>Discord</Tab>
                    <Tab>Inventor</Tab>
                    <Tab
                      onClick={() => {
                        setData({
                          ...data,
                          validation: { ...data.validation, json: true },
                          content: {
                            ...data.content,
                            json: pretty.pd.json({
                              ...(data.content.content.length >= 1
                                ? { content: data.content.content }
                                : {}),
                              ...(data.content.color != "#000000" ||
                              data.content.description.length >= 1 ||
                              data.content.footer.length >= 1 ||
                              data.content.image.length >= 1 ||
                              data.content.thumbnail.length >= 1 ||
                              data.content.title.length >= 1 ||
                              data.content.username.length >= 1 ||
                              data.content.url.length >= 1 ||
                              data.content.avatar.length >= 1 ||
                              data.content.authorUrl.length >= 1
                                ? {
                                    embeds: [
                                      {
                                        ...(data.content.title.length >= 1
                                          ? { title: data.content.title }
                                          : {}),
                                        ...(data.content.url.length >= 1
                                          ? { url: data.content.url }
                                          : {}),
                                        ...(data.content.description.length >= 1
                                          ? {
                                              description:
                                                data.content.description,
                                            }
                                          : {}),
                                        ...(data.content.color != "#000000" ||
                                        data.content.description.length >= 1 ||
                                        data.content.footer.length >= 1 ||
                                        data.content.image.length >= 1 ||
                                        data.content.thumbnail.length >= 1 ||
                                        data.content.title.length >= 1 ||
                                        data.content.username.length >= 1 ||
                                        data.content.url.length >= 1 ||
                                        data.content.avatar.length >= 1 ||
                                        data.content.authorUrl.length >= 1
                                          ? {
                                              color: Number(
                                                data.content.color.replace(
                                                  "#",
                                                  "0x"
                                                )
                                              ),
                                            }
                                          : {}),
                                        ...(data.content.image.length >= 1
                                          ? {
                                              image: {
                                                url: data.content.image,
                                              },
                                            }
                                          : {}),
                                        ...(data.content.thumbnail.length >= 1
                                          ? {
                                              thumbnail: {
                                                url: data.content.thumbnail,
                                              },
                                            }
                                          : {}),
                                        ...(data.content.avatar.length >= 1 ||
                                        data.content.authorUrl.length >= 1 ||
                                        data.content.username.length >= 1
                                          ? {
                                              author: {
                                                ...(data.content.avatar
                                                  .length >= 1
                                                  ? {
                                                      icon_url:
                                                        data.content.avatar,
                                                    }
                                                  : {}),
                                                ...(data.content.username
                                                  .length >= 1
                                                  ? {
                                                      name: data.content
                                                        .username,
                                                    }
                                                  : {}),
                                                ...(data.content.authorUrl
                                                  .length >= 1
                                                  ? {
                                                      url: data.content
                                                        .authorUrl,
                                                    }
                                                  : {}),
                                              },
                                            }
                                          : {}),
                                        ...(data.content.footer.length >= 1
                                          ? {
                                              footer: {
                                                text: data.content.footer,
                                              },
                                            }
                                          : {}),
                                      },
                                    ],
                                  }
                                : {}),
                            }),
                          },
                        });
                      }}
                    >
                      JSON
                    </Tab>
                  </TabList>
                  <TabPanel name="Discord Input">
                    <div className="p-3 my-3">
                      <header className="overflow-hidden text-ellipsis whitespace-nowrap">
                        <img
                          src="https://cdn.discordapp.com/embed/avatars/0.png"
                          className="align-top rounded-full size-10"
                        ></img>
                        <span className="ml-2 font-semibold text-white">
                          Discord Bot
                        </span>
                        <span className="p-1 rounded-md ml-1 text-[12px] font-[800] text-white bg-[#5864f2]">
                          APP
                        </span>
                        <span className="ml-1 text-xs text-gray-400">
                          Today at{" "}
                          <span className="uppercase">
                            {date.toLocaleTimeString([], {
                              timeStyle: "short",
                              hour12: true,
                            })}
                          </span>
                        </span>
                      </header>
                      <main className="ml-10">
                        <div className="flex-grow !min-w-full indicator">
                          {!data.validators.content(data.content.content) && (
                            <span className="indicator-item badge-xs indicator-center badge badge-warning">
                              Character Limit Reached
                            </span>
                          )}
                          <textarea
                            name="content"
                            value={data.content.content}
                            className={`max-w-full h-12 min-h-10 border-2 border-transparent !outline-0 resize-y !w-full p-2 textarea bg-[#383A40] mb-1 ${
                              !data.validators.content(data.content.content)
                                ? "textarea-warning"
                                : ""
                            }`}
                            placeholder="Message Body"
                            maxLength={2000}
                            onChange={handleChange}
                            title={
                              !data.validators.content(data.content.content)
                                ? "Character Limit Reached"
                                : ""
                            }
                          ></textarea>
                        </div>
                        <div className=" flex-grow max-w-full bg-[#2b2d31] w-full rounded-sm flex">
                          <div className="dropdown">
                            <div
                              tabIndex={0}
                              className={`left-0 min-h-full cursor-pointer flex-grow max-w-[5px] min-w-[5px] rounded-tl-md rounded-bl-md w-full`}
                              role="button"
                              style={{ backgroundColor: data.content.color }}
                            ></div>
                            <div
                              tabIndex={0}
                              className="z-20 ml-3 dropdown-menu dropdown-menu-right w-52 bg-zinc-800"
                            >
                              <Sketch
                                color={data.content.color}
                                onChange={(color) => {
                                  handleChange(new result(color.hex));
                                }}
                                disableAlpha={true}
                              ></Sketch>
                            </div>
                          </div>
                          <div className="grid w-full max-w-full gap-4 p-5">
                            <div className="grid grid-cols-3 grid-rows-1 gap-2">
                              <div className="!w-full relative inline-flex">
                                {!data.validators.username(
                                  data.content.username
                                ) && (
                                  <span className=" badge-xs badge badge-warning">
                                    Character Limit Reached
                                  </span>
                                )}
                                {data.content.username.length === 0 &&
                                  (data.content.authorUrl.length >= 1 ||
                                    data.content.avatar.length >= 1) && (
                                    <span className="absolute top-0 bottom-auto transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap end-1/2 start-1/2 rtl:translate-x-1/2 ">
                                      Field Required
                                    </span>
                                  )}
                                <input
                                  name="username"
                                  value={data.content.username}
                                  maxLength={256}
                                  className={`input border-transparent !ring-0 !outline-0 border-2 flex-grow resize-none bg-[#383A40] align-middle ${
                                    !data.validators.username(
                                      data.content.username
                                    ) && "!input-warning"
                                  } ${
                                    data.content.username.length === 0 &&
                                    (data.content.authorUrl.length >= 1 ||
                                      data.content.avatar.length >= 1)
                                      ? "!input-error"
                                      : ""
                                  }`}
                                  placeholder="Author Username"
                                  inputMode="text"
                                  onChange={handleChange}
                                ></input>
                              </div>
                              <div className="!w-full indicator">
                                {data.content.avatar.length >= 1 &&
                                  !data.validation.avatar && (
                                    <span className="indicator-center badge-xs indicator-top indicator-item badge badge-error">
                                      Invalid URL
                                    </span>
                                  )}
                                <input
                                  value={data.content.avatar}
                                  name="avatar"
                                  className={` disabled:!input disabled:!border-0 disabled:!bg-[#383A40] !outline-0 input !w-full flex-grow border-2 border-transparent resize-none bg-[#383A40] align-middle ${
                                    data.content.avatar.length >= 1
                                      ? !data.validation.avatar
                                        ? `!input-error`
                                        : "!input-success"
                                      : ""
                                  }`}
                                  placeholder="Author Avatar URL"
                                  inputMode="url"
                                  onChange={handleChange}
                                ></input>
                              </div>
                              <div className="!w-full indicator">
                                {data.content.authorUrl.length >= 1 &&
                                  !data.validation.authorUrl && (
                                    <span className="indicator-center badge-xs indicator-top indicator-item badge badge-error">
                                      Invalid URL
                                    </span>
                                  )}
                                <input
                                  value={data.content.authorUrl}
                                  name="authorUrl"
                                  className={`!w-full flex-grow input  !outline-0 border-2 border-transparent resize-none bg-[#383A40] align-middle ${
                                    data.content.authorUrl.length >= 1
                                      ? !data.validation.authorUrl
                                        ? `!input-error`
                                        : "!input-success"
                                      : ""
                                  }`}
                                  placeholder="Author URL"
                                  onChange={handleChange}
                                ></input>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-1 gap-2">
                              <div className="!w-full indicator">
                                {data.content.title.length == 256 && (
                                  <span className="indicator-center badge-xs indicator-top indicator-item badge badge-warning">
                                    Character Limit Reached
                                  </span>
                                )}
                                {data.content.title.length === 0 &&
                                  data.content.url.length >= 1 && (
                                    <span className="indicator-center badge-xs indicator-top indicator-item badge badge-error">
                                      Field Required
                                    </span>
                                  )}
                                <input
                                  value={data.content.title}
                                  maxLength={256}
                                  name="title"
                                  placeholder="Title Content"
                                  className={`input input-block !w-full flex-grow !outline-0 border-2 border-transparent bg-[#383A40] ${
                                    data.content.title.length === 256 &&
                                    "!input-warning"
                                  } ${
                                    data.content.title.length === 0 &&
                                    data.content.url.length >= 1
                                      ? "!input-error"
                                      : ""
                                  }`}
                                  inputMode="text"
                                  onChange={handleChange}
                                ></input>
                              </div>
                              <div className="flex-grow !min-w-full indicator">
                                {data.content.url.length >= 1 &&
                                  !data.validation.url && (
                                    <span className="indicator-center badge-xs indicator-top indicator-item badge badge-error">
                                      Invalid URL
                                    </span>
                                  )}
                                <input
                                  value={data.content.url}
                                  name="url"
                                  placeholder="Title URL"
                                  className={`input input-block !w-full flex-grow  !outline-0 border-2 border-transparent bg-[#383A40] ${
                                    data.content.url.length >= 1
                                      ? !data.validation.url
                                        ? `!input-error`
                                        : "!input-success"
                                      : ""
                                  }`}
                                  inputMode="url"
                                  onChange={handleChange}
                                ></input>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-1 gap-2">
                              <div className="!w-full col-span-2 indicator">
                                {data.content.description.length === 4000 && (
                                  <span className="indicator-center badge-xs indicator-top indicator-item badge badge-warning">
                                    Character Limit Reached
                                  </span>
                                )}
                                <textarea
                                  value={data.content.description}
                                  name="description"
                                  className={`max-w-full h-12 min-h-10 flex-grow !outline-0 border-2 border-transparent max-h-full resize-y w-full p-2 col-span-2 textarea bg-[#383A40] ${
                                    data.content.description.length == 4000
                                      ? "textarea-warning"
                                      : ""
                                  }`}
                                  placeholder="Description"
                                  maxLength={4000}
                                  title={
                                    data.content.description.length == 4000
                                      ? "Character Limit Reached"
                                      : ""
                                  }
                                  onChange={handleChange}
                                ></textarea>
                              </div>
                              <div className="!w-full indicator">
                                {data.content.thumbnail.length >= 1 &&
                                  !data.validation.thumbnail && (
                                    <span className="indicator-center badge-xs indicator-top indicator-item badge badge-error">
                                      Invalid URL
                                    </span>
                                  )}
                                <input
                                  value={data.content.thumbnail}
                                  name="thumbnail"
                                  className={`input !outline-0 flex-grow w-full border-2 border-transparent bg-[#383A40] max-h-full ${
                                    data.content.thumbnail.length >= 1
                                      ? !data.validation.thumbnail
                                        ? `!input-error`
                                        : "!input-success"
                                      : ""
                                  }`}
                                  placeholder="Thumbnail URL"
                                  onChange={handleChange}
                                  title={
                                    data.content.thumbnail.length >= 1
                                      ? !data.validation.thumbnail &&
                                        `Invalid URL`
                                      : ""
                                  }
                                ></input>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 grid-rows-1">
                              <div className="!w-full indicator">
                                {data.content.image.length >= 1 &&
                                  !data.validation.image && (
                                    <span className="indicator-center badge-xs indicator-top indicator-item badge badge-error">
                                      Invalid URL
                                    </span>
                                  )}
                                <input
                                  value={data.content.image}
                                  name="image"
                                  className={`min-h-full flex-grow w-full !outline-0 border-2 border-transparent input input-block bg-[#383A40] ${
                                    data.content.image.length >= 1
                                      ? !data.validation.image
                                        ? `!input-error`
                                        : "!input-success"
                                      : ""
                                  }`}
                                  placeholder="Image URL"
                                  onChange={handleChange}
                                  title={
                                    data.content.image.length >= 1
                                      ? !data.validation.image && `Invalid URL`
                                      : ""
                                  }
                                ></input>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 grid-rows-1">
                              <div className="!w-full indicator">
                                {data.content.footer.length === 2048 && (
                                  <span className="indicator-center badge-xs indicator-top indicator-item badge badge-warning">
                                    Character Limit Reached
                                  </span>
                                )}
                                <input
                                  value={data.content.footer}
                                  name="footer"
                                  maxLength={2048}
                                  className={`input bg-[#383A40] !outline-0 w-full input-block flex-grow border-2 border-transparent ${
                                    data.content.footer.length == 2048 &&
                                    "!input-warning"
                                  }`}
                                  placeholder="Footer Text"
                                  onChange={handleChange}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </main>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Coming Soon</p>
                  </TabPanel>
                  {
                    <TabPanel className={"!focus:border-0"} name="JSON Input">
                      {!data.validation.json &&
                        data.content.json.length >= 1 && (
                          <span className="block w-full min-w-full text-center text-black bg-red-500">
                            {data.validation.jsonError.map((error) => (
                              <span>{error}</span>
                            ))}
                          </span>
                        )}
                      <CodeMirror
                        className="w-full"
                        theme={"dark"}
                        value={data.content.json}
                        extensions={[langs.json(), hyperLink]}
                        onChange={handleChange}
                      ></CodeMirror>
                    </TabPanel>
                  }
                </Tabs>
              </div>
              <div className="hidden my-2 ml-1 mr-2 overflow-auto overflow-y-auto text-white rounded-md border-y-0 border-x-0 xl:block bg-zinc-900 h-fit">
                <Tabs
                  selectedTabClassName="bg-[#fdbd24] rounded-t-md text-black"
                  defaultFocus={false}
                  focusTabOnClick={false}
                >
                  <TabList
                    className={`bg-zinc-800 grid grid-cols-3 text-center rounded-t-md pl-0 max-h-fit h-fit mb-0`}
                  >
                    <Tab>Inventor</Tab>
                    <Tab>Discord</Tab>
                    <Tab>JSON</Tab>
                  </TabList>
                  <TabPanel name="Inventor Output">
                    <div className="mx-4 my-5">
                      <div className="grid grid-cols-1 grid-rows-1">
                        <label className="text-sm font-medium">
                          Content <FontAwesomeIcon icon={faCircleQuestion} />
                        </label>
                        <label className="pb-1 text-xs text-zinc-400">
                          Content of plain text message above embed. This field
                          is optional.
                        </label>
                        <span className="inter px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                          <pre className="p-0 m-0 overflow-x-auto break-words whitespace-pre-wrap bg-transparent rounded-none">
                            {data.content.content}
                          </pre>
                        </span>
                        <label className="mt-1.5 text-sm text-zinc-300">
                          Insert Variable{" "}
                          <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                            CTRL + /
                          </kbd>
                        </label>
                      </div>
                      <hr className="border-t mt-7 mb-9 bg-zinc-700"></hr>
                      <div className="grid grid-cols-2 grid-rows-2 gap-3 gap-y-6">
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Title <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Title of the embed message.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.title}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            URL <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            URL when embed title is clicked.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.url}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Thumbnail URL{" "}
                            <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Thumbnail URL of the embed message.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.thumbnail}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                      </div>
                      <div className="my-5"></div>
                      <div className="grid grid-cols-1 grid-rows-1">
                        <label className="text-sm font-medium">
                          Description{" "}
                          <FontAwesomeIcon icon={faCircleQuestion} />
                        </label>
                        <label className="pb-1 text-xs text-zinc-400">
                          Description of the embed message.
                        </label>
                        <span className="px-3 pb-[9px] min-h-32 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                          <pre className="p-0 m-0 overflow-x-auto break-words whitespace-pre-wrap bg-transparent rounded-none">
                            {data.content.description}
                          </pre>
                        </span>
                        <label className="mt-1.5 text-sm text-zinc-300">
                          Insert Variable{" "}
                          <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                            CTRL + /
                          </kbd>
                        </label>
                      </div>
                      <div className="my-5"></div>
                      <div className="grid grid-cols-2 grid-rows-3 gap-3 gap-y-6">
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Color <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Provide a hex color data.content.json for the embed
                            sidebar.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.color}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Image URL{" "}
                            <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Image URL of the embed message.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.image}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Author Icon URL{" "}
                            <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Image URL of the author icon.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.avatar}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Author Name{" "}
                            <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Author name of the embed message.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.username}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Author URL{" "}
                            <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Author URL of the embed message.
                          </label>
                          <span className="px-3 overflow-hidden text-wrap pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="h-full p-0 m-0 bg-transparent rounded-none">
                              {data.content.authorUrl}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 grid-rows-1">
                          <label className="text-sm font-medium">
                            Footer Text{" "}
                            <FontAwesomeIcon icon={faCircleQuestion} />
                          </label>
                          <label className="pb-1 text-xs text-zinc-400">
                            Footer text of the embed message.
                          </label>
                          <span className="px-3 pb-[9px] min-h-10 pt-[9px] bg-[#242427] ring-1 ring-zinc-600 rounded-md">
                            <pre className="p-0 m-0 bg-transparent rounded-none">
                              {data.content.footer}
                            </pre>
                          </span>
                          <label className="mt-1.5 text-sm text-zinc-300">
                            Insert Variable{" "}
                            <kbd className="inline-flex items-center p-0 px-1 ml-1 font-sans text-xs text-gray-400 border rounded border-white/10 bg-gray-800/50">
                              CTRL + /
                            </kbd>
                          </label>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel className={`bg-[#313338]`} name="Discord Output">
                  {/* <div className="p-6 ">
                      <header className="overflow-hidden text-ellipsis whitespace-nowrap">
                        <img
                          src="https://cdn.discordapp.com/embed/avatars/0.png"
                          className="align-top rounded-full size-10"
                        ></img>
                        <span className="ml-2 font-semibold text-white">
                          Discord Bot
                        </span>
                        <span className="p-1 rounded-md ml-1 text-[12px] font-[800] text-white bg-[#5864f2]">
                          APP
                        </span>
                        <span className="ml-1 text-xs text-gray-400">
                          Today at{" "}
                          <span className="uppercase">
                            {date.toLocaleTimeString([], {
                              timeStyle: "short",
                              hour12: true,
                            })}
                          </span>
                        </span>
                      </header>
                      <main className="ml-10">
                        <div className="flex-grow !min-w-full">
                          <div
                            name="content"
                            className={`max-w-full text-sm font-light border-2 border-transparent !outline-0 resize-none !w-full ml-2`}
                            dangerouslySetInnerHTML={{__html: toHTML(parseMentions(data.content.content), {escapeHTML: true, discordOnly: false, cssModuleNames: {"d-mention":"bg-[#5865f298] cursor-default text-center whitespace-nowrap font-medium p-[2px] text-[#c9cdfb] rounded-md hover:bg-[#5864f2] hover:text-white"},discordCallback:{
                              user: user=> "user",
                              role: role=>"role",
                              slash: slash=>("command",12345),
                              channel: channel => "channel"
                            }})}}
                          ></div>
                        </div>
                        <div className=" flex-grow max-w-full overflow-hidden bg-[#2b2d31] rounded-sm flex w-full">
                            <div
                              tabIndex={0}
                              className={`left-0 min-h-full cursor-pointer flex-grow max-w-[5px] min-w-[5px] rounded-tl-md rounded-bl-md w-full`}
                              role="button"
                              style={{ backgroundColor: data.content.color }}
                            ></div>
                            <div className="p-2">
                              <div className="flex">
                                <div className="" ref={Content}>
                                  <div className="flex max-w-full">
                                  <img src={data.content.avatar} className="mr-3 rounded-full size-6" onError={(e)=>{e.target.classList.add("hidden")}}onLoad={(e)=>{e.target.classList.remove("hidden")}} ></img>
                                  {
                                    data.content.authorUrl.length >= 1 ? <a target="_blank" className="text-sm font-semibold" href={data.content.authorUrl}>{data.content.username}</a> : <p className="max-w-full m-0 text-sm font-semibold break-all whitespace-normal">{data.content.username}</p>
                                  }
                                </div>
                                <div className="max-w-full mt-2">
                                  {
                                    data.content.url.length >= 1 ? <a className="text-base font-semibold" target="_blank" href={data.content.url}>{data.content.title}</a> : <p className="max-w-full m-0 text-base font-semibold break-all whitespace-normal">{data.content.title}</p>
                                  }
                                </div>
                                <div className="max-w-full mt-2">
                                  <p className="max-w-full m-0 text-sm font-normal break-all whitespace-normal"
                                  dangerouslySetInnerHTML={{__html: toHTML(parseMentions(data.content.description), {embed:true,escapeHTML: true, discordOnly: false, cssModuleNames: {"d-mention":"bg-[#5865f298] cursor-default text-center whitespace-nowrap font-medium p-[2px] text-[#c9cdfb] rounded-md hover:bg-[#5864f2] hover:text-white"},discordCallback:{
                                    user: user=> "user",
                                    role: role=>"role",
                                    slash: slash=>("command",12345),
                                    channel: channel => "channel"
                                  }})}}
                                  ></p>
                                </div>
                                </div>
                                <div>
                                <div className="flex-auto"></div>
                                <img className="right-0 size-20" src={data.content.thumbnail} onError={(e)=>{e.target.classList.add("hidden")}} onLoad={(e)=>{e.target.classList.remove("hidden")}}></img>
                                </div>
                              </div>
                              <img className="max-w-full max-h-full" src={data.content.image} onError={(e)=>{e.target.classList.add("hidden")}} onLoad={(e)=>{e.target.classList.remove("hidden")}}></img>
                            </div>
                          </div>
                        
                      </main>
                      <span className="text-sm text-zinc-400">This output is an approximation and may result in inaccurate results.</span>
                    </div> */}
                    <p>Coming Soon</p>
                  </TabPanel>
                  <TabPanel className={``} name="JSON Output">
                    <div className="">
                      <CodeMirror
                        className=""
                        extensions={[langs.json()]}
                        readOnly={true}
                        theme={"dark"}
                        value={pretty.pd.json({
                          ...(data.content.content.length >= 1
                            ? { content: data.content.content }
                            : {}),
                          ...(data.content.color != "#000000" ||
                          data.content.description.length >= 1 ||
                          data.content.footer.length >= 1 ||
                          data.content.image.length >= 1 ||
                          data.content.thumbnail.length >= 1 ||
                          data.content.title.length >= 1 ||
                          data.content.username.length >= 1 ||
                          data.content.url.length >= 1 ||
                          data.content.avatar.length >= 1 ||
                          data.content.authorUrl.length >= 1
                            ? {
                                embeds: [
                                  {
                                    ...(data.content.title.length >= 1
                                      ? { title: data.content.title }
                                      : {}),
                                    ...(data.content.url.length >= 1
                                      ? { url: data.content.url }
                                      : {}),
                                    ...(data.content.description.length >= 1
                                      ? {
                                          description: data.content.description,
                                        }
                                      : {}),
                                    ...(data.content.color != "#000000" ||
                                    data.content.description.length >= 1 ||
                                    data.content.footer.length >= 1 ||
                                    data.content.image.length >= 1 ||
                                    data.content.thumbnail.length >= 1 ||
                                    data.content.title.length >= 1 ||
                                    data.content.username.length >= 1 ||
                                    data.content.url.length >= 1 ||
                                    data.content.avatar.length >= 1 ||
                                    data.content.authorUrl.length >= 1
                                      ? {
                                          color: Number(
                                            data.content.color.replace(
                                              "#",
                                              "0x"
                                            )
                                          ),
                                        }
                                      : {}),
                                    ...(data.content.image.length >= 1
                                      ? { image: { url: data.content.image } }
                                      : {}),
                                    ...(data.content.thumbnail.length >= 1
                                      ? {
                                          thumbnail: {
                                            url: data.content.thumbnail,
                                          },
                                        }
                                      : {}),
                                    ...(data.content.avatar.length >= 1 ||
                                    data.content.authorUrl.length >= 1 ||
                                    data.content.username.length >= 1
                                      ? {
                                          author: {
                                            ...(data.content.avatar.length >= 1
                                              ? {
                                                  icon_url: data.content.avatar,
                                                }
                                              : {}),
                                            ...(data.content.username.length >=
                                            1
                                              ? { name: data.content.username }
                                              : {}),
                                            ...(data.content.authorUrl.length >=
                                            1
                                              ? { url: data.content.authorUrl }
                                              : {}),
                                          },
                                        }
                                      : {}),
                                    ...(data.content.footer.length >= 1
                                      ? {
                                          footer: { text: data.content.footer },
                                        }
                                      : {}),
                                  },
                                ],
                              }
                            : {}),
                        })}
                      ></CodeMirror>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}
