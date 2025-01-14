import custom from "./markdown/custom";
import normal from "./markdown/normal";
import chengxin from "./markdown/chengxin";
import chazi from "./markdown/chazi";
import nenqing from "./markdown/nenqing";
import lvyi from "./markdown/lvyi";
import hongfei from "./markdown/hongfei";
import lanying from "./markdown/lanying";
import lanqing from "./markdown/lanqing";
import shanchui from "./markdown/shanchui";
import jikehei from "./markdown/jikehei";
import qiangweizi from "./markdown/qiangweizi";
import jijianhei from "./markdown/jijianhei";
import chenglan from "./markdown/chenglan";
import wanggehei from "./markdown/wanggehei";
import axiaoxin from "./markdown/axiaoxin";
import chuizibianqian from "./markdown/chuizibianqian";
import yanqihu from "./markdown/yanqihu";
import jingdianfeicuilv from "./markdown/jingdianfeicuilv";
import youyafeicuilv from "./markdown/youyafeicuilv";
import jingdianlan from "./markdown/jingdianlan";
import youyalan from "./markdown/youyalan";
import jingdianhuoliju from "./markdown/jingdianhuoliju";
import youyahuoliju from "./markdown/youyahuoliju";
import jingdianningmenghuang from "./markdown/jingdianningmenghuang";
import youyaningmenghuang from "./markdown/youyaningmenghuang";
import jingdianxunyizi from "./markdown/jingdianxunyizi";
import youyaxunyizi from "./markdown/youyaxunyizi";
import jingdiantiankonglan from "./markdown/jingdiantiankonglan";
import youyatiankonglan from "./markdown/youyatiankonglan";
import jingdianmeiguijin from "./markdown/jingdianmeiguijin";
import youyameiguijin from "./markdown/youyameiguijin";
import jingdianganlanlv from "./markdown/jingdianganlanlv";
import youyaganlanlv from "./markdown/youyaganlanlv";
import jingdianshimohei from "./markdown/jingdianshimohei";
import youyashimohei from "./markdown/youyashimohei";
import jingdianwuyanhui from "./markdown/jingdianwuyanhui";
import youyawuyanhui from "./markdown/youyawuyanhui";
import jingdianyinghuafen from "./markdown/jingdianyinghuafen";
import youyayinghuafen from "./markdown/youyayinghuafen";

import content from "./content.md";

import atomOneDark from "./code/atomOneDark";
import atomOneLight from "./code/atomOneLight";
import github from "./code/github";
import monokai from "./code/monokai";
import vs2015 from "./code/vs2015";
import xcode from "./code/xcode";

import macAtomOneDark from "./macCode/macAtomOneDark";
import macAtomOneLight from "./macCode/macAtomOneLight";
import macGithub from "./macCode/macGithub";
import macMonokai from "./macCode/macMonokai";
import macVs2015 from "./macCode/macVs2015";
import macXcode from "./macCode/macXcode";

import basic from "./basic";

export default {
  basic,
  normal,
  custom,
  themes: [
    { themeId: "axiaoxin", name: "人言兑", css: axiaoxin },
    { themeId: "chengxin", name: "橙心", css: chengxin },
    { themeId: "chazi", name: "姹紫", css: chazi },
    { themeId: "nenqing", name: "嫩青", css: nenqing },
    { themeId: "lvyi", name: "绿意", css: lvyi },
    { themeId: "hongfei", name: "红绯", css: hongfei },
    { themeId: "lanying", name: "蓝莹", css: lanying },
    { themeId: "lanqing", name: "兰青", css: lanqing },
    { themeId: "shanchui", name: "山吹", css: shanchui },
    { themeId: "wanggehei", name: "网格黑", css: wanggehei },
    { themeId: "jikehei", name: "极客黑", css: jikehei },
    { themeId: "qiangweizi", name: "蔷薇紫", css: qiangweizi },
    { themeId: "jijianhei", name: "极简黑", css: jijianhei },
    { themeId: "chenglan", name: "橙蓝", css: chenglan },
    { themeId: "chuizibianqian", name: "锤子便签", css: chuizibianqian },
    { themeId: "yanqihu", name: "雁栖湖", css: yanqihu },
    { themeId: "jingdianlan", name: "经典蓝", css: jingdianlan },
    { themeId: "youyalan", name: "经典蓝（优雅）", css: youyalan },
    { themeId: "jingdianfeicuilv", name: "翡翠绿", css: jingdianfeicuilv },
    { themeId: "youyafeicuilv", name: "翡翠绿（优雅）", css: youyafeicuilv },
    { themeId: "jingdianhuoliju", name: "活力橘", css: jingdianhuoliju },
    { themeId: "youyahuoliju", name: "活力橘（优雅）", css: youyahuoliju },
    {
      themeId: "jingdianningmenghuang",
      name: "柠檬黄",
      css: jingdianningmenghuang
    },
    {
      themeId: "youyaningmenghuang",
      name: "柠檬黄（优雅）",
      css: youyaningmenghuang
    },
    { themeId: "jingdianxunyizi", name: "薰衣紫", css: jingdianxunyizi },
    { themeId: "youyaxunyizi", name: "薰衣紫（优雅）", css: youyaxunyizi },
    {
      themeId: "jingdiantiankonglan",
      name: "天空蓝",
      css: jingdiantiankonglan
    },
    {
      themeId: "youyatiankonglan",
      name: "天空蓝（优雅）",
      css: youyatiankonglan
    },
    {
      themeId: "jingdianmeiguijin",
      name: "玫瑰金",
      css: jingdianmeiguijin
    },
    {
      themeId: "youyameiguijin",
      name: "玫瑰金（优雅）",
      css: youyameiguijin
    },
    { themeId: "jingdianganlanlv", name: "橄榄绿", css: jingdianganlanlv },
    { themeId: "youyaganlanlv", name: "橄榄绿（优雅）", css: youyaganlanlv },
    { themeId: "jingdianshimohei", name: "石墨黑", css: jingdianshimohei },
    { themeId: "youyashimohei", name: "石墨黑（优雅）", css: youyashimohei },
    { themeId: "jingdianwuyanhui", name: "雾烟灰", css: jingdianwuyanhui },
    { themeId: "youyawuyanhui", name: "雾烟灰（优雅）", css: youyawuyanhui },
    {
      themeId: "jingdianyinghuafen",
      name: "樱花粉",
      css: jingdianyinghuafen
    },
    {
      themeId: "youyayinghuafen",
      name: "樱花粉（优雅）",
      css: youyayinghuafen
    },
  ],
  code: {
    atomOneDark,
    atomOneLight,
    github,
    monokai,
    vs2015,
    xcode,
    macAtomOneDark,
    macAtomOneLight,
    macGithub,
    macMonokai,
    macVs2015,
    macXcode
  },
  content
};
