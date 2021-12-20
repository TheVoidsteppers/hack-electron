// 基础色 
const Green = '#33cc33' // 绿色
const Green_95 = '#33cc3395' // 绿色 95 透明度
const Green_90 = '#33cc3390' // 绿色 90 透明度
const Green_50 = '#33cc3350' // 绿色 50 透明度
const Green_20 = '#33cc3320' // 绿色 20 透明度
const Green_15 = '#33cc3315' // 绿色 15 透明度

const DarkGreen = '#3ba73b' // 深绿
const DarkGreen_75 = '#3ba73b75' // 深绿

const Purple = '#a64dff' // 紫色
const Purple_95 = '#a64dff95' // 紫色 95
const Purple_90 = '#a64dff90' // 紫色 90
const Purple_85 = '#a64dff85' // 紫色 85
const Purple_30 = '#a64dff30' // 紫色 30

const BackgroundColor = '#16171d' // 背景色
const ActiveBackgroundColor = '#21222c' // 激活下的背景色
const ActiveBackgroundColor_95 = '#21222c95' // 激活下的背景色
const LightBlack = '#2c2d3a' // 黑色
const LightBlack_b0 = '#2c2d3ab0' // 黑色
const LightBlack_80 = '#2c2d3a80' // 黑色
const LightBlack_50 = '#2c2d3a50' // 黑色

const Indigo = '#486484' // 靛色

const Cyan = '#1b9891' // 青色

const White = '#bbd1dd' // 白色

const Orange = '#ff661a' // 橙色

const Yellow = '#ffff99' // 黄色
const DarkYellow = '#C7BA00' // 暗黄色
const BrightYellow = '#ffff1a' // 亮黄色

const Blue = '#268BD2' // 蓝色

const Red = '#ff704d' // 红色

const Magenta = '#9933ff' // 品红

const themeJson = {
  "name": "Hack Electron",
  "colors": {
    "focusBorder": `${Purple}`,
    "selection.background": `${Green_90}`,
    "errorForeground": `${Red}`,
    "activityBarBadge.background": `${Indigo}`,
    "activityBar.activeBorder": `${Purple}`,
    "activityBar.activeBackground": `${ActiveBackgroundColor}`,
    "activityBar.background": `${BackgroundColor}`,
    "activityBar.foreground": `${Green}`,
    "activityBar.inactiveForeground": `${Green_95}`,
    "badge.background": `${ActiveBackgroundColor}`,
    "badge.foreground": `${White}`,
    "breadcrumb.background": `${ActiveBackgroundColor}`,
    "breadcrumb.foreground": `${Indigo}`,
    "button.background": `${Indigo}`,
    "button.foreground": `${White}`,
    "dropdown.background": `${BackgroundColor}`,
    "dropdown.border": `${Indigo}`,
    "editorBracketMatch.border": `${Indigo}`,
    "editorCursor.foreground": `${Green}`,
    "editorGroupHeader.tabsBackground": `${BackgroundColor}`,
    "editorGroup.border": `${ActiveBackgroundColor}`,
    "editorHoverWidget.background": `${ActiveBackgroundColor}`,
    "editorHoverWidget.border": `${Indigo}`,
    "editorHoverWidget.foreground": `${White}`,
    "editorIndentGuide.background": `${ActiveBackgroundColor_95}`,
    "editorLineNumber.activeForeground": `${White}`,
    "editorLineNumber.foreground": `${Indigo}`,
    "editorMarkerNavigationError.background": `${Orange}`,
    "editorMarkerNavigationWarning.background": `${ActiveBackgroundColor}`,
    "editorPane.background": `${BackgroundColor}`,
    "editorSuggestWidget.selectedBackground": `${LightBlack}`,
    "editorUnnecessaryCode.opacity": "#000000c0",
    "editorWidget.background": `${ActiveBackgroundColor}`,
    "editorWidget.border": `${Indigo}`,
    "editor.background": `${BackgroundColor}`,
    "editor.findMatchHighlightBackground": `${DarkGreen_75}`,
    "editor.foldBackground": `${LightBlack_50}`,
    "editor.foreground": `${White}`,
    "editor.hoverHighlightBackground": `${ActiveBackgroundColor}`,
    "editor.lineHighlightBackground": `${Green_15}`,
    "editor.rangeHighlightBackground": `${BackgroundColor}`,
    "editor.selectionBackground": `${Green_50}`,
    "editor.inactiveSelectionBackground": `${Green_50}`,
    "editor.selectionHighlightBackground": `${Green_20}`,
    "errorForeground": `${White}`,
    "inputOption.activeBorder": `${Purple}`,
    "inputValidation.errorBackground": `${ActiveBackgroundColor}`,
    "inputValidation.errorBorder": `${Indigo}`,
    "inputValidation.infoBackground": `${ActiveBackgroundColor}`,
    "inputValidation.infoBorder": `${Indigo}`,
    "inputValidation.warningBackground": `${ActiveBackgroundColor}`,
    "inputValidation.warningBorder": `${Indigo}`,
    "input.background": `${BackgroundColor}`,
    "input.foreground": `${White}`,
    "input.border": `${ActiveBackgroundColor}`,
    "input.placeholderForeground": `${White}`,
    "list.activeSelectionBackground": `${LightBlack_50}`,
    "list.activeSelectionForeground": `${Green}`,
    "list.dropBackground": `${ActiveBackgroundColor}`,
    "list.focusBackground": `${LightBlack_50}`,
    "list.highlightForeground": `${Green}`,
    "list.hoverBackground": `${LightBlack_50}`,
    "list.inactiveSelectionBackground": `${Purple_30}`,
    "list.inactiveSelectionForeground": `${Green}`,
    "minimap.findMatchHighlight": `${White}`,
    "minimap.selectionHighlight": `${Green}`,
    "minimapSlider.background": `${LightBlack_80}`,
    "minimapSlider.hoverBackground": `${LightBlack_b0}`,
    "minimapSlider.activeBackground": `${LightBlack_b0}`,
    "notificationCenterHeader.foreground": `${Green}`,
    "notificationCenterHeader.background": `${LightBlack}`,
    "notifications.background": `${ActiveBackgroundColor}`,
    "notifications.foreground": `${White}`,
    "panelTitle.activeBorder": `${Purple}`,
    "panelTitle.activeForeground": `${Green}`,
    "panel.border": `${Indigo}`,
    "peekViewTitle.background": `${ActiveBackgroundColor}`,
    "peekView.border": `${Indigo}`,
    "peekViewResult.background": `${ActiveBackgroundColor}`,
    "peekViewEditor.background": `${BackgroundColor}`,
    "peekViewEditorGutter.background": `${ActiveBackgroundColor}`,
    "peekViewEditor.matchHighlightBackground": `${Indigo}`,
    "pickerGroup.border": `${Indigo}`,
    "pickerGroup.foreground": `${ActiveBackgroundColor}`,
    "progressBar.background": `${Indigo}`,
    "scrollbarSlider.activeBackground": `${LightBlack_b0}`,
    "scrollbarSlider.background": `${LightBlack_80}`,
    "scrollbarSlider.hoverBackground": `${LightBlack_b0}`,
    "settings.checkboxBorder": `${Indigo}`,
    "settings.checkboxForeground": `${White}`,
    "settings.dropdownForeground": `${White}`,
    "settings.headerForeground": `${Green}`,
    "settings.modifiedItemIndicator": `${Purple}`,
    "settings.numberInputBackground": `${ActiveBackgroundColor}`,
    "settings.textInputBackground": `${ActiveBackgroundColor}`,
    "settings.textInputForeground": `${White}`,
    "sideBarSectionHeader.background": `${ActiveBackgroundColor}`,
    "sideBarSectionHeader.foreground": `${Purple}`,
    "sideBarTitle.foreground": `${Green}`,
    "sideBar.background": `${BackgroundColor}`,
    "sideBar.border": `${Indigo}`,
    "sideBar.foreground": `${White}`,
    "statusBar.background": `${BackgroundColor}`,
    "statusBar.foreground": `${Green}`,
    "tab.activeBorder": `${Purple}`,
    "tab.activeForeground": `${Green}`,
    "tab.inactiveForeground": `${Green_90}`,
    "tab.unfocusedActiveForeground": `${Green_95}`,
    "tab.unfocusedInactiveForeground": `${Green_90}`,
    "terminal.ansiBlack": `${ActiveBackgroundColor}`,
    "terminal.ansiRed": `${Red}`,
    "terminal.ansiGreen": `${Green}`,
    "terminal.ansiYellow": `${Yellow}`,
    "terminal.ansiBlue": `${Blue}`,
    "terminal.ansiMagenta": `${Magenta}`,
    "terminal.ansiCyan": `${Cyan}`,
    "terminal.ansiWhite": `${White}`,
    "terminal.ansiBrightBlack": "#7a7a8c",
    "terminal.ansiBrightRed": `${Orange}`,
    "terminal.ansiBrightGreen": `${Green}`,
    "terminal.ansiBrightYellow": `${BrightYellow}`,
    "terminal.ansiBrightBlue": "#1fada6",
    "terminal.ansiBrightMagenta": `${Purple}`,
    "terminal.ansiBrightCyan": "#00ffff",
    "terminal.ansiBrightWhite": "#c4edc4",
    "terminal.foreground": `${White}`,
    "tree.indentGuidesStroke": `${ActiveBackgroundColor}`,
    "editorWarning.foreground": `${BrightYellow}`,
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": [],
      "settings": {}
    },
    {
      "name": "Comment",
      "scope": [
        "comment"
      ],
      "settings": {
        "fontStyle": "bold italic",
        "foreground": "#7D7D69"
      }
    },
    {
      "name": "String",
      "scope": [
        "string"
      ],
      "settings": {
        "foreground": `${DarkYellow}`
      }
    },
    {
      "name": "Regexp",
      "scope": [
        "string.regexp"
      ],
      "settings": {
        "foreground": "#9EFFFF"
      }
    },
    {
      "name": "Number",
      "scope": [
        "constant.numeric"
      ],
      "settings": {
        "foreground": "#37D6CB"
      }
    },
    {
      "name": "Variable",
      "scope": [
        "variable.language",
        "variable.other"
      ],
      "settings": {
        "foreground": "#1BDE3B"
      }
    },
    {
      "name": "Keyword",
      "scope": [
        "keyword"
      ],
      "settings": {
        "foreground": "#A1AD64",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Storage",
      "scope": [
        "storage"
      ],
      "settings": {
        "foreground": "#999",
        "fontStyle": "bold italic"
      }
    },
    {
      "name": "Class name",
      "scope": [
        "entity.name.class",
        "entity.name.type.class"
      ],
      "settings": {
        "foreground": "#CDF5CC"
      }
    },
    {
      "name": "Function name",
      "scope": [
        "entity.name.function"
      ],
      "settings": {
        "foreground": "#E3CD26"
      }
    },
    {
      "name": "Variable start",
      "scope": [
        "punctuation.definition.variable"
      ],
      "settings": {
        "foreground": ""
      }
    },
    {
      "name": "Embedded code markers",
      "scope": [
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.end"
      ],
      "settings": {
        "foreground": "#54814eff"
      }
    },
    {
      "name": "Built-in constant",
      "scope": [
        "constant.language",
        "meta.preprocessor"
      ],
      "settings": {
        "foreground": "#07A85D"
      }
    },
    {
      "name": "Support.construct",
      "scope": [
        "support.function.construct",
        "keyword.other.new"
      ],
      "settings": {
        "foreground": `${Purple}`
      }
    },
    {
      "name": "User-defined constant",
      "scope": [
        "constant.character",
        "constant.other"
      ],
      "settings": {
        "foreground": "#3F8A16"
      }
    },
    {
      "name": "Inherited class",
      "scope": [
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": ""
      }
    },
    {
      "name": "Function argument",
      "scope": [
        "variable.parameter"
      ],
      "settings": {
        "foreground": `${Purple}`
      }
    },
    {
      "name": "Tag name",
      "scope": [
        "entity.name.tag"
      ],
      "settings": {
        "foreground": `${Purple_95}`
      }
    },
    {
      "name": "Tag start&#x2f;end",
      "scope": [
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end"
      ],
      "settings": {
        "foreground": "#337275"
      }
    },
    {
      "name": "Tag attribute",
      "scope": [
        "entity.other.attribute-name"
      ],
      "settings": {
        "foreground": "#8DAD56"
      }
    },
    {
      "name": "Library function",
      "scope": [
        "support.function"
      ],
      "settings": {
        "foreground": "#998842"
      }
    },
    {
      "name": "Continuation",
      "scope": [
        "punctuation.separator.continuation"
      ],
      "settings": {
        "foreground": "#54814eff"
      }
    },
    {
      "name": "Library constant",
      "scope": [
        "support.constant"
      ],
      "settings": {
        "foreground": ""
      }
    },
    {
      "name": "Library class&#x2f;type",
      "scope": [
        "support.type",
        "support.class"
      ],
      "settings": {
        "foreground": "#5cb3ffb9"
      }
    },
    {
      "name": "Library Exception",
      "scope": [
        "support.type.exception"
      ],
      "settings": {
        "foreground": "#4f8949ff"
      }
    },
    {
      "name": "Library variable",
      "scope": [
        "support.other.variable"
      ],
      "settings": {
        "foreground": ""
      }
    },
    {
      "name": "Invalid",
      "scope": [
        "invalid"
      ],
      "settings": {
        "foreground": "#CC7E7E"
      }
    },
    {
      "name": "Markup Quote",
      "scope": [
        "markup.quote"
      ],
      "settings": {
        "foreground": "#68AD1F"
      }
    },
    {
      "name": "Markup Lists",
      "scope": [
        "markup.list"
      ],
      "settings": {
        "foreground": "#9DC734"
      }
    },
    {
      "name": "Markup Styling",
      "scope": [
        "markup.bold",
        "markup.italic"
      ],
      "settings": {
        "foreground": "#519b49ff"
      }
    },
    {
      "name": "Markup Inline",
      "scope": [
        "markup.inline.raw"
      ],
      "settings": {
        "foreground": "#54814eff"
      }
    },
    {
      "name": "Markup Headings",
      "scope": [
        "markup.heading"
      ],
      "settings": {
        "foreground": "#E08C48"
      }
    },
    {
      "name": "Markup Setext Header",
      "scope": [
        "markup.heading.setext"
      ],
      "settings": {
        "foreground": "#519449ff"
      }
    },
    {
      "name": "Language Var",
      "scope": [
        "variable.language"
      ],
      "settings": {
        "foreground": "#8FFFE9"
      }
    },
    {
      "name": "Entity Name Function",
      "scope": [
        "entity.name.function"
      ],
      "settings": {
        "foreground": "#ffaf12"
      }
    },
    {
      "name": "Meta Brace Round",
      "scope": [
        "meta.brace.round"
      ],
      "settings": {
        "foreground": "#99FF7A"
      }
    },
    {
      "name": "String DQuote HTML",
      "scope": [
        "string.quoted.double.html"
      ],
      "settings": {
        "foreground": "#82FF5C"
      }
    },
    {
      "name": "Punc Def Tag",
      "scope": [
        "punctuation.definition.tag"
      ],
      "settings": {
        "foreground": `${Purple_90}`
      }
    },
    {
      "name": "Entity Name Instance",
      "scope": [
        "entity.name.type.instance"
      ],
      "settings": {
        "foreground": `${Purple_85}`
      }
    },
    {
      "name": "String JS",
      "scope": [
        "string.quoted.js"
      ],
      "settings": {
        "foreground": `${DarkYellow}`
      }
    }
  ]
}

module.exports = themeJson