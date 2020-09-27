(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{328:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"java常用工具类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java常用工具类"}},[t._v("#")]),t._v(" JAVA常用工具类")]),t._v(" "),e("p",[t._v("目录\n- 第一部分：常用的16个工具类\n- 第二部分：常用的测试库（链接及用法）\n- 第三部分：java开发常用工具类（正则校验）")]),t._v(" "),e("h4",{attrs:{id:"第一部分-常用的16个工具类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一部分-常用的16个工具类"}},[t._v("#")]),t._v(" 第一部分：常用的16个工具类")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("https://mvnrepository.com/artifact/org.apache.commons/org.apache.commons.lang --\x3e\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.commons"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.commons.lang"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.4.0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h5",{attrs:{id:"一、org-apache-commons-io-ioutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、org-apache-commons-io-ioutils"}},[t._v("#")]),t._v(" 一、org.apache.commons.io.IOUtils")]),t._v(" "),e("p",[t._v("1、closeQuietly 关闭一个IO流、socket、或者selector且不抛出异常。通常放在finally块。")]),t._v(" "),e("p",[t._v("2、toString 转换IO流、Uri、byte[]为String。")]),t._v(" "),e("p",[t._v("3、copy IO流数据复制，从输入流写到输出流中，最大支持2GB。")]),t._v(" "),e("p",[t._v("4、toByteArray 从输入流、URI获取byte[]。")]),t._v(" "),e("p",[t._v("5、write 把字节、字符等写入输出流。")]),t._v(" "),e("p",[t._v("6、toInputStream 把字符转换为输入流。")]),t._v(" "),e("p",[t._v("7、readLines 从输入流中读取多行数据，返回List")]),t._v(" "),e("p",[t._v("8、copyLarge 同copy，支持2GB以上数据的复制。")]),t._v(" "),e("p",[t._v("9、lineIterator 从输入流返回一个迭代器，")]),t._v(" "),e("p",[t._v("10、根据参数要求读取的数据量，全部读取，如果数据不够，则失败。")]),t._v(" "),e("h5",{attrs:{id:"二、org-apache-commons-io-fileutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、org-apache-commons-io-fileutils"}},[t._v("#")]),t._v(" 二、org.apache.commons.io.FileUtils")]),t._v(" "),e("p",[t._v("1、deleteDirectory 删除文件夹")]),t._v(" "),e("p",[t._v("2、readFileToString 以字符形式读取文件内容。")]),t._v(" "),e("p",[t._v("3、deleteQueitly 删除文件或文件夹且不会抛出异常。")]),t._v(" "),e("p",[t._v("4、copyFile 复制文件")]),t._v(" "),e("p",[t._v("5、writeStringToFile 把字符写到目标文件，如果文件不存在，则创建。")]),t._v(" "),e("p",[t._v("6、forceMkdir 强制创建文件夹，如果该文件夹父级目录不存在，则创建父级。")]),t._v(" "),e("p",[t._v("7、write 把字符写到指定文件中")]),t._v(" "),e("p",[t._v("8、listFiles 列举某个目录下的文件(根据过滤器)")]),t._v(" "),e("p",[t._v("9、copyDirectory 复制文件夹")]),t._v(" "),e("p",[t._v("10、forceDelete 强制删除文件")]),t._v(" "),e("h5",{attrs:{id:"三、org-apache-commons-lang-stringutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、org-apache-commons-lang-stringutils"}},[t._v("#")]),t._v(" 三、org.apache.commons.lang.StringUtils")]),t._v(" "),e("p",[t._v("1、isBlank 字符串是否为空 (trim后判断)")]),t._v(" "),e("p",[t._v("2、isEmpty 字符串是否为空 (不trim并判断)")]),t._v(" "),e("p",[t._v("3、equals 字符串是否相等")]),t._v(" "),e("p",[t._v("4、join 合并数组为单一字符串，可传分隔符")]),t._v(" "),e("p",[t._v("5、split 分割字符串")]),t._v(" "),e("p",[t._v("6、EMPTY 空字符串")]),t._v(" "),e("p",[t._v("7、trimToNull trim后为空字符串则转换为null")]),t._v(" "),e("p",[t._v("8、replace 替换字符串")]),t._v(" "),e("h5",{attrs:{id:"四、org-apache-http-util-entityutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、org-apache-http-util-entityutils"}},[t._v("#")]),t._v(" 四、org.apache.http.util.EntityUtils")]),t._v(" "),e("p",[t._v("1、toString 把Entity转换为字符串")]),t._v(" "),e("p",[t._v("2、consume 确保Entity中的内容全部被消费。可以看到源码里又一次消费了Entity的内容，假如用户没有消费，那调用Entity时候将会把它消费掉。")]),t._v(" "),e("p",[t._v("3、toByteArray 把Entity转换为字节流")]),t._v(" "),e("p",[t._v("4、consumeQuietly 和consume一样，但不抛异常")]),t._v(" "),e("p",[t._v("5、getContentCharset 获取内容的编码")]),t._v(" "),e("h5",{attrs:{id:"五、org-apache-commons-lang3-stringutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、org-apache-commons-lang3-stringutils"}},[t._v("#")]),t._v(" 五、org.apache.commons.lang3.StringUtils")]),t._v(" "),e("p",[t._v("1、isBlank 字符串是否为空 (trim后判断)")]),t._v(" "),e("p",[t._v("2、isEmpty 字符串是否为空 (不trim并判断)")]),t._v(" "),e("p",[t._v("3、equals 字符串是否相等")]),t._v(" "),e("p",[t._v("4、join 合并数组为单一字符串，可传分隔符")]),t._v(" "),e("p",[t._v("5、split 分割字符串")]),t._v(" "),e("p",[t._v("6、EMPTY 空字符串")]),t._v(" "),e("p",[t._v("7、replace 替换字符串")]),t._v(" "),e("p",[t._v("9、capitalize 首字符大写")]),t._v(" "),e("h5",{attrs:{id:"六、org-apache-commons-io-filenameutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、org-apache-commons-io-filenameutils"}},[t._v("#")]),t._v(" 六、org.apache.commons.io.FilenameUtils")]),t._v(" "),e("p",[t._v("1、getExtension 返回文件后缀名")]),t._v(" "),e("p",[t._v("2、getBaseName 返回文件名，不包含后缀名")]),t._v(" "),e("p",[t._v("3、getName 返回文件全名")]),t._v(" "),e("p",[t._v("4、concat 按命令行风格组合文件路径(详见方法注释)")]),t._v(" "),e("p",[t._v("5、removeExtension 删除后缀名")]),t._v(" "),e("p",[t._v("6、normalize 使路径正常化")]),t._v(" "),e("p",[t._v("7、wildcardMatch 匹配通配符")]),t._v(" "),e("p",[t._v("8、seperatorToUnix 路径分隔符改成unix系统格式的，即/")]),t._v(" "),e("p",[t._v("9、getFullPath 获取文件路径，不包括文件名")]),t._v(" "),e("p",[t._v("10、isExtension 检查文件后缀名是不是传入参数(List)中的一个")]),t._v(" "),e("h5",{attrs:{id:"七、org-springframework-util-stringutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、org-springframework-util-stringutils"}},[t._v("#")]),t._v(" 七、org.springframework.util.StringUtils")]),t._v(" "),e("p",[t._v("1、hasText 检查字符串中是否包含文本")]),t._v(" "),e("p",[t._v("2、hasLength 检测字符串是否长度大于0")]),t._v(" "),e("p",[t._v("3、isEmpty 检测字符串是否为空（若传入为对象，则判断对象是否为null）")]),t._v(" "),e("p",[t._v("4、commaDelimitedStringToArray 逗号分隔的String转换为数组")]),t._v(" "),e("p",[t._v("5、collectionToDelimitedString 把集合转为CSV格式字符串")]),t._v(" "),e("p",[t._v("6、replace 替换字符串")]),t._v(" "),e("p",[t._v("7、delimitedListToStringArray 相当于split")]),t._v(" "),e("p",[t._v("8、uncapitalize 首字母小写")]),t._v(" "),e("p",[t._v("9、collectionToDelimitedCommaString 把集合转为CSV格式字符串")]),t._v(" "),e("p",[t._v("10、tokenizeToStringArray 和split基本一样，但能自动去掉空白的单词")]),t._v(" "),e("h5",{attrs:{id:"八、org-apache-commons-lang-arrayutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、org-apache-commons-lang-arrayutils"}},[t._v("#")]),t._v(" 八、org.apache.commons.lang.ArrayUtils")]),t._v(" "),e("p",[t._v("1、contains 是否包含某字符串")]),t._v(" "),e("p",[t._v("2、addAll 添加所有")]),t._v(" "),e("p",[t._v("3、clone 克隆一个数组")]),t._v(" "),e("p",[t._v("4、isEmpty 是否空数组")]),t._v(" "),e("p",[t._v("5、add 向数组添加元素")]),t._v(" "),e("p",[t._v("6、subarray 截取数组")]),t._v(" "),e("p",[t._v("7、indexOf 查找下标")]),t._v(" "),e("p",[t._v("8、isEquals 比较数组是否相等")]),t._v(" "),e("p",[t._v("9、toObject 基础类型数据数组转换为对应的Object数组")]),t._v(" "),e("h5",{attrs:{id:"九、org-apache-commons-lang-stringescapeutils支持编码转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、org-apache-commons-lang-stringescapeutils支持编码转换"}},[t._v("#")]),t._v(" 九、org.apache.commons.lang.StringEscapeUtils支持编码转换")]),t._v(" "),e("p",[t._v("escapeXml unEscapeXml。")]),t._v(" "),e("p",[t._v("此外，还支持html、java、JavaScript、sql、csv等")]),t._v(" "),e("h5",{attrs:{id:"十、org-apache-http-client-utils-urlencodedutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、org-apache-http-client-utils-urlencodedutils"}},[t._v("#")]),t._v(" 十、org.apache.http.client.utils.URLEncodedUtils")]),t._v(" "),e("p",[t._v("1、format 格式化参数，返回一个HTTP POST或者HTTP PUT可用 application/x-www-form-urlencoded字符串")]),t._v(" "),e("p",[t._v("2、parse 把String或者URI等转换为List")]),t._v(" "),e("h5",{attrs:{id:"十一、org-apache-commons-codec-digest-digestutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十一、org-apache-commons-codec-digest-digestutils"}},[t._v("#")]),t._v(" 十一、org.apache.commons.codec.digest.DigestUtils")]),t._v(" "),e("p",[t._v("1、md5Hex MD5加密，返回32位")]),t._v(" "),e("p",[t._v("2、sha1Hex SHA-1加密")]),t._v(" "),e("p",[t._v("3、sha256Hex SHA-256加密")]),t._v(" "),e("p",[t._v("4、sha512Hex SHA-512加密")]),t._v(" "),e("p",[t._v("5、md5 MD5加密，返回16位")]),t._v(" "),e("h5",{attrs:{id:"十二、org-apache-commons-collections-collectionutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十二、org-apache-commons-collections-collectionutils"}},[t._v("#")]),t._v(" 十二、org.apache.commons.collections.CollectionUtils")]),t._v(" "),e("p",[t._v("1、isEmpty 是否为空")]),t._v(" "),e("p",[t._v("2、select 根据条件筛选集合元素")]),t._v(" "),e("p",[t._v("3、transform 根据指定方法处理集合元素，类似List的map()。")]),t._v(" "),e("p",[t._v("4、filter 过滤元素，雷瑟List的filter()")]),t._v(" "),e("p",[t._v("5、find 基本和select一样")]),t._v(" "),e("p",[t._v("6、collect 和transform 差不多一样，但是返回新数组")]),t._v(" "),e("p",[t._v("7、forAllDo 调用每个元素的指定方法。")]),t._v(" "),e("p",[t._v("8、isEqualCollection 判断两个集合是否一致")]),t._v(" "),e("h5",{attrs:{id:"十三、org-apache-commons-lang3-arrayutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十三、org-apache-commons-lang3-arrayutils"}},[t._v("#")]),t._v(" 十三、org.apache.commons.lang3.ArrayUtils")]),t._v(" "),e("p",[t._v("1、contains 是否包含某字符串")]),t._v(" "),e("p",[t._v("2、addAll 添加所有")]),t._v(" "),e("p",[t._v("3、clone 克隆一个数组")]),t._v(" "),e("p",[t._v("4、isEmpty 是否空数组")]),t._v(" "),e("p",[t._v("5、add 向数组添加元素")]),t._v(" "),e("p",[t._v("6、subarray 截取数组")]),t._v(" "),e("p",[t._v("7、indexOf 查找下标")]),t._v(" "),e("p",[t._v("8、isEquals 比较数组是否相等")]),t._v(" "),e("p",[t._v("9、toObject 基础类型数据数组转换为对应的Object数组")]),t._v(" "),e("h5",{attrs:{id:"十四、org-apache-commons-beanutils-propertyutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十四、org-apache-commons-beanutils-propertyutils"}},[t._v("#")]),t._v(" 十四、org.apache.commons.beanutils.PropertyUtils")]),t._v(" "),e("p",[t._v("1、getProperty 获取对象属性值")]),t._v(" "),e("p",[t._v("2、setProperty 设置对象属性值")]),t._v(" "),e("p",[t._v("3、getPropertyDiscriptor 获取属性描述器")]),t._v(" "),e("p",[t._v("4、isReadable 检查属性是否可访问")]),t._v(" "),e("p",[t._v("5、copyProperties 复制属性值，从一个对象到另一个对象")]),t._v(" "),e("p",[t._v("6、getPropertyDiscriptors 获取所有属性描述器")]),t._v(" "),e("p",[t._v("7、isWriteable 检查属性是否可写")]),t._v(" "),e("p",[t._v("8、getPropertyType 获取对象属性类型")]),t._v(" "),e("h5",{attrs:{id:"十五、org-apache-commons-lang3-stringescapeutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十五、org-apache-commons-lang3-stringescapeutils"}},[t._v("#")]),t._v(" 十五、org.apache.commons.lang3.StringEscapeUtils")]),t._v(" "),e("p",[t._v("支持编码转换")]),t._v(" "),e("p",[t._v("escapeJson unEscapeJson。")]),t._v(" "),e("p",[t._v("此外，还支持html、java、JavaScript、sql、csv、xml等")]),t._v(" "),e("h5",{attrs:{id:"十六、org-apache-commons-beanutils-beanutils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十六、org-apache-commons-beanutils-beanutils"}},[t._v("#")]),t._v(" 十六、org.apache.commons.beanutils.BeanUtils")]),t._v(" "),e("p",[t._v("1、copyPeoperties 复制属性值，从一个对象到另一个对象")]),t._v(" "),e("p",[t._v("2、getProperty 获取对象属性值")]),t._v(" "),e("p",[t._v("3、setProperty 设置对象属性值")]),t._v(" "),e("p",[t._v("4、populate 根据Map给属性复制")]),t._v(" "),e("p",[t._v("5、copyPeoperty 复制单个值，从一个对象到另一个对象。")]),t._v(" "),e("p",[t._v("6、cloneBean 克隆")]),t._v(" "),e("h4",{attrs:{id:"第二部分-常用的测试库-链接及用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二部分-常用的测试库-链接及用法"}},[t._v("#")]),t._v(" 第二部分：常用的测试库（链接及用法）")]),t._v(" "),e("p",[t._v("以下提供一些类库的测试，希望对大家有用：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th")])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java命令行选项解析之Commons-CLI & Args4J & JCommander"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2161201",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java调用Native API之JNA"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2154075",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java执行SSH/SCP之JSch"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2109675",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java元组类型之javatuples"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2068554",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java读写Excel之POI超入门"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1538591",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java操作PDF之iText超入门"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1538689",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java构建工具之Ant"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1540336",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java模板引擎之FreeMarker"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1540613",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java生成缩略图之Thumbnailator"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1545708",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java日期计算之Joda-Time"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1546652",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java工具类之Apache的Commons Lang和BeanUtils"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1547845",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java集合框架之fastutil"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1548162",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java网络通信之HttpClient"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1550436",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java解析HTML之NekoHTML"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1551831",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java读写CSV之SuperCSV"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1552053",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java作业调度之Quartz"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1836263",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java压缩解压ZIP之Zip4j"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1836727",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java嵌入式NoSQL数据库之Berkeley DB Java Edition"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1872481",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java单元测试之邮件测试-GreenMail"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2001617",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java单元测试之代码覆盖率-JaCoCo"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2002371",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java日文分词器之Kuromoji"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2008575",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java数学表达式计算(Expression Evaluator)"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2011558",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java检测无用代码之UCDetector"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/2012010",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("li",[t._v("Java简化臃肿代码之Lombok"),e("a",{attrs:{href:"http://rensanning.iteye.com/blog/1930853",rel:"nofollow",target:"_blank"}},[t._v("详细内容")])])])])])]),t._v(" "),e("p",[t._v("|      | ")]),t._v(" "),e("h4",{attrs:{id:"第三部分-java开发常用工具类-正则校验-原文链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三部分-java开发常用工具类-正则校验-原文链接"}},[t._v("#")]),t._v(" 第三部分：java开发常用工具类（正则校验）"),e("a",{attrs:{href:"https://www.cnblogs.com/ITzhangda/p/9146452.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("==java正则表达式的匹配包括：==")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("邮箱，手机，姓名，昵称，身份证号，银行卡号等；")])]),t._v(" "),e("li",[e("p",[t._v("生成6位随机数；")])]),t._v(" "),e("li",[e("p",[t._v("对url中字符串进行编码和解码；")])]),t._v(" "),e("li",[e("p",[t._v("获取客户端ip地址；")])]),t._v(" "),e("li",[e("p",[t._v("获取系统当前时间；")])]),t._v(" "),e("li",[e("p",[t._v("生成32位编码不含横线；")])]),t._v(" "),e("li",[e("p",[t._v("生成MD5编码；")])]),t._v(" "),e("li",[e("p",[t._v("通过身份证获取性别；")])]),t._v(" "),e("li",[e("p",[t._v("通过身份证获取生日；")])]),t._v(" "),e("li",[e("p",[t._v("手机号中间4位替换成星号；")])]),t._v(" "),e("li",[e("p",[t._v("邮箱地址加星号；")])]),t._v(" "),e("li",[e("p",[t._v("生成随机密码；")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);