# BeautifulSoup4 常用函数

## find()、find_all()

你可以将 find() 视作只返回符合条件的列表的第一项的 find_all() 函数.

- **示例**

```python
soup.find(class_="apk_left_title_info")
# 搜索类名为 apk_left_title_info 的节点，并返回 Tag 对象

soup.find(class_="list_app_info").text
# 搜索类名为 list_app_info 的节点，并获取它的包含的文字

soup.find(class_="apk_left_title_info").stripped_strings
# 搜索类名为 apk_left_title_info 的节点，并获取它的包含的文字，且根据它之前的格式分割为字符串数组（用于分割的符号包含 tab、回车等）

soup.find(class_="list_app_info").get_text("|", strip=True)
# 搜索类名为 list_app_info 的节点，并获取它的包含的文字，且忽略这段文字的原先的格式（例如会删去 tab 符号等）

soup.find("script", type="text/javascript").text
# 搜索标签为 script 的节点，且它的类型为 text/javascript，并返回它包含的文字
```

用法详见[官方文档](https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/#id28).
