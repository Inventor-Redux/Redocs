import os
import json
print("Calculating Coverage...")
totalCount = 0
finishedCount = 0
def recurse (d):
    for filename in os.listdir(d):
        f = os.path.join(d, filename)
        if os.path.isfile(f) and filename.endswith(".md"):
            print("Processing", f)
            global totalCount
            global finishedCount
            totalCount += 1
            file = open(f, "r")
            content = file.read()
            if """:::warning Under Construction

    This page is currently incomplete and may contain errors. We appreciate your patience and understanding as we work to complete and refine the content. If you notice any issues or have suggestions for improvement, please feel free to submit a pull request or create an issue to report the problem.

:::""" not in content:
                finishedCount += 1
        elif os.path.isdir(f):
            print("Processing directory", f)
            recurse(f)
def coverage(t,f):
    print("Calculating documentation coverage...")
    return round((f/t) * 100, 2)
recurse("docs/inventor-reference")
coverage = coverage(totalCount, finishedCount)
coverageFile = open("static/coverage.json", "w", encoding='utf-8')
json.dump({"coverage": coverage}, coverageFile, ensure_ascii=False)
coverageFile.close()
print("------------------------------------------")
print(f"Total markdown files: {totalCount}")
print(f"Markdown files finished: {finishedCount}")
print(f"Current documentation coverage: {coverage}%")