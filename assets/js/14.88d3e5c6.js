(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{370:function(s,t,n){"use strict";n.r(t);var a=n(44),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h4",{attrs:{id:"两两交换链表中的节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两两交换链表中的节点"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("两两交换链表中的节点"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。")]),s._v(" "),n("p",[n("strong",[s._v("你不能只是单纯的改变节点内部的值")]),s._v("，而是需要实际的进行节点交换。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg",alt:"img"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = [1,2,3,4]\n输出：[2,1,4,3]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = []\n输出：[]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("示例 3：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = [1]\n输出：[1]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[s._v("链表中节点的数目在范围 "),n("code",[s._v("[0, 100]")]),s._v(" 内")]),s._v(" "),n("li",[n("code",[s._v("0 <= Node.val <= 100")])])]),s._v(" "),n("p",[s._v("**进阶：**你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）")]),s._v(" "),n("p",[n("strong",[s._v("AC代码")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Definition for singly-linked list.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# class ListNode:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     def __init__(self, val=0, next=None):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         self.val = val")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         self.next = next")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapPairs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        ans"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ListNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("head\n        temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ans\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            n1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            n2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("n1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            n1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("n2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            n2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("n1\n            temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("n1\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("通过"),n("strong",[s._v("迭代")]),s._v("的方式实现两两交换链表中的节点。")]),s._v(" "),n("li",[s._v("创建哑结点 "),n("code",[s._v("ans")]),s._v("，令 "),n("code",[s._v("ans.next = head")]),s._v("。令 "),n("code",[s._v("temp")]),s._v(" 表示当前到达的节点，初始时 "),n("code",[s._v("temp = ans")]),s._v("。每次需要交换 "),n("code",[s._v("temp")]),s._v(" 后面的两个节点。")]),s._v(" "),n("li",[s._v("如果 "),n("code",[s._v("temp")]),s._v(" 的后面没有节点或者只有一个节点，则没有更多的节点需要交换，因此结束交换。否则，获得 "),n("code",[s._v("temp")]),s._v(" 后面的两个节点 "),n("code",[s._v("n1")]),s._v(" 和 "),n("code",[s._v("n2")]),s._v("，通过更新节点的指针关系实现两两交换节点。")]),s._v(" "),n("li",[s._v("具体而言，交换之前的节点关系是 "),n("code",[s._v("temp -> n1 -> n2")]),s._v("，交换之后的节点关系要变成 "),n("code",[s._v("temp -> n2 -> n1")]),s._v("，因此需要进行如下操作:\n"),n("ul",[n("li",[n("code",[s._v("temp.next = n2")]),s._v(" "),n("code",[s._v("n1.next = n2.next")]),s._v(" "),n("code",[s._v("n2.next = n1")])])])]),s._v(" "),n("li",[s._v("完成上述操作之后，节点关系即变成 "),n("code",[s._v("temp -> n2 -> n1")]),s._v("。再令 "),n("code",[s._v("temp = n1")]),s._v("，对链表中的其余节点进行两两交换，直到全部节点都被两两交换。")]),s._v(" "),n("li",[s._v("两两交换链表中的节点之后，新的链表的头节点是 "),n("code",[s._v("ans.next")]),s._v("，返回新的链表的头节点即可。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);