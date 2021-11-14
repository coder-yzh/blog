(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{414:function(a,n,s){"use strict";s.r(n);var e=s(44),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"ubuntu-16-04-安装anaconda3详细教程-从下载源到测试成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04-安装anaconda3详细教程-从下载源到测试成功"}},[a._v("#")]),a._v(" Ubuntu 16.04 安装anaconda3详细教程（从下载源到测试成功）")]),a._v(" "),s("p",[a._v("1、下载anaconda3镜像，清华大学开源软件镜像站下载地址：")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("我下载的版本是Anaconda3-4.0.0-Linux-x86_64.sh")]),a._v(" "),s("p",[a._v("2、新建一个文件夹software，用来存放从镜像站中下载的Anaconda3-4.0.0-Linux-x86_64.sh，回到桌面右键打开终端，输入如下指令，进入software文件夹")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd software\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("3、输入如下指令进行安装：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("bash Anaconda3-4.0.0-Linux-x86_64.sh\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("持续按回车键继续安装（此处是阅读注册信息），直到跳出，输入yes后继续：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Do you approve the license terms? [yes|no]\n>>> yes\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("这里可以自己指定文件路径（建议默认路径即可），按回车确认，开始安装：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Anaconda3 will now be installed into this location:\n/home/yzh/anaconda3\n\n  - Press ENTER to confirm the location\n  - Press CTRL-C to abort the installation\n  - Or specify a different location below\n\n[/home/yzh/anaconda3] >>> \nPREFIX=/home/yzh/anaconda3\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("下图提示你是否要将Anaconda的安装路径添加到PATH环境变量中。输入“yes”选择添加环境变量；")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Do you wish the installer to prepend the Anaconda3 install location\nto PATH in your /home/yzh/.bashrc ? [yes|no]\n[no] >>> \nYou may wish to edit your .bashrc or prepend the Anaconda3 install location:\n\n$ export PATH=/home/yzh/anaconda3/bin:$PATH\n\nThank you for installing Anaconda3!\n\nShare your notebooks and packages on Anaconda Cloud!\nSign up for free: https://anaconda.org\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("如果输入no（此处我是没有输入no，自动默认为no了），那么我们就需要自己手动在.bashrc文件中添加路径,输入如下指令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("gedit .bashrc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在.bashrc文件末尾添加如下指令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('export PATH="/opt/anaconda3/bin:$PATH"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后再在命令行中输入：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source ~/.bashrc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("4、测试是否安装成功 ，输入python，出现Anaconda 4.0.0 (64-bit)，则说明安装成功")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('yzh@yzh-virtual-machine:~$ python\nPython 3.5.1 |Anaconda 4.0.0 (64-bit)| (default, Dec  7 2015, 11:16:01) \n[GCC 4.4.7 20120313 (Red Hat 4.4.7-1)] on linux\nType "help", "copyright", "credits" or "license" for more information.\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);