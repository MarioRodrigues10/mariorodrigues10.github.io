import{a as e}from"/build/_shared/chunk-VSPEV7W4.js";var n=Object.freeze(JSON.parse(`{"displayName":"SCSS","name":"scss","patterns":[{"include":"#variable_setting"},{"include":"#at_rule_forward"},{"include":"#at_rule_use"},{"include":"#at_rule_include"},{"include":"#at_rule_import"},{"include":"#general"},{"include":"#flow_control"},{"include":"#rules"},{"include":"#property_list"},{"include":"#at_rule_mixin"},{"include":"#at_rule_media"},{"include":"#at_rule_function"},{"include":"#at_rule_charset"},{"include":"#at_rule_option"},{"include":"#at_rule_namespace"},{"include":"#at_rule_fontface"},{"include":"#at_rule_page"},{"include":"#at_rule_keyframes"},{"include":"#at_rule_at_root"},{"include":"#at_rule_supports"},{"match":";","name":"punctuation.terminator.rule.css"}],"repository":{"at_rule_at_root":{"begin":"\\\\s*((@)(at-root))(\\\\s+|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.at-root.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.at-root.scss","patterns":[{"include":"#function_attributes"},{"include":"#functions"},{"include":"#selectors"}]},"at_rule_charset":{"begin":"\\\\s*((@)charset\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.at-rule.charset.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*((?=;|$))","name":"meta.at-rule.charset.scss","patterns":[{"include":"#variable"},{"include":"#string_single"},{"include":"#string_double"}]},"at_rule_content":{"begin":"\\\\s*((@)content\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.content.scss"}},"end":"\\\\s*((?=;))","name":"meta.content.scss","patterns":[{"include":"#variable"},{"include":"#selectors"},{"include":"#property_values"}]},"at_rule_each":{"begin":"\\\\s*((@)each\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.each.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*((?=}))","name":"meta.at-rule.each.scss","patterns":[{"match":"\\\\b(in|,)\\\\b","name":"keyword.control.operator"},{"include":"#variable"},{"include":"#property_values"},{"include":"$self"}]},"at_rule_else":{"begin":"\\\\s*((@)else(\\\\s*(if)?))\\\\s*","captures":{"1":{"name":"keyword.control.else.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.else.scss","patterns":[{"include":"#conditional_operators"},{"include":"#variable"},{"include":"#property_values"}]},"at_rule_extend":{"begin":"\\\\s*((@)extend\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.at-rule.extend.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?=;)","name":"meta.at-rule.extend.scss","patterns":[{"include":"#variable"},{"include":"#selectors"},{"include":"#property_values"}]},"at_rule_fontface":{"patterns":[{"begin":"^\\\\s*((@)font-face\\\\b)","beginCaptures":{"1":{"name":"keyword.control.at-rule.fontface.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.fontface.scss","patterns":[{"include":"#function_attributes"}]}]},"at_rule_for":{"begin":"\\\\s*((@)for\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.for.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.for.scss","patterns":[{"match":"(==|!=|<=|>=|<|>|from|to|through)","name":"keyword.control.operator"},{"include":"#variable"},{"include":"#property_values"},{"include":"$self"}]},"at_rule_forward":{"begin":"\\\\s*((@)forward\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.at-rule.forward.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?=;)","name":"meta.at-rule.forward.scss","patterns":[{"match":"\\\\b(as|hide|show)\\\\b","name":"keyword.control.operator"},{"captures":{"1":{"name":"entity.other.attribute-name.module.scss"},"2":{"name":"punctuation.definition.wildcard.scss"}},"match":"\\\\b([\\\\w-]+)(\\\\*)"},{"match":"\\\\b[\\\\w-]+\\\\b","name":"entity.name.function.scss"},{"include":"#variable"},{"include":"#string_single"},{"include":"#string_double"},{"include":"#comment_line"},{"include":"#comment_block"}]},"at_rule_function":{"patterns":[{"begin":"\\\\s*((@)function\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.at-rule.function.scss"},"2":{"name":"punctuation.definition.keyword.scss"},"3":{"name":"entity.name.function.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.function.scss","patterns":[{"include":"#function_attributes"}]},{"captures":{"1":{"name":"keyword.control.at-rule.function.scss"},"2":{"name":"punctuation.definition.keyword.scss"},"3":{"name":"entity.name.function.scss"}},"match":"\\\\s*((@)function\\\\b)\\\\s*","name":"meta.at-rule.function.scss"}]},"at_rule_if":{"begin":"\\\\s*((@)if\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.if.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.if.scss","patterns":[{"include":"#conditional_operators"},{"include":"#variable"},{"include":"#property_values"}]},"at_rule_import":{"begin":"\\\\s*((@)import\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.at-rule.import.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*((?=;)|(?=}))","name":"meta.at-rule.import.scss","patterns":[{"include":"#variable"},{"include":"#string_single"},{"include":"#string_double"},{"include":"#functions"},{"include":"#comment_line"}]},"at_rule_include":{"patterns":[{"begin":"(?<=@include)\\\\s+(?:([\\\\w-]+)\\\\s*(\\\\.))?([\\\\w-]+)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"variable.scss"},"2":{"name":"punctuation.access.module.scss"},"3":{"name":"entity.name.function.scss"},"4":{"name":"punctuation.definition.parameters.begin.bracket.round.scss"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.scss"}},"name":"meta.at-rule.include.scss","patterns":[{"include":"#function_attributes"}]},{"captures":{"0":{"name":"meta.at-rule.include.scss"},"1":{"name":"variable.scss"},"2":{"name":"punctuation.access.module.scss"},"3":{"name":"entity.name.function.scss"}},"match":"(?<=@include)\\\\s+(?:([\\\\w-]+)\\\\s*(\\\\.))?([\\\\w-]+)"},{"captures":{"0":{"name":"meta.at-rule.include.scss"},"1":{"name":"keyword.control.at-rule.include.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"match":"((@)include)\\\\b"}]},"at_rule_keyframes":{"begin":"(?<=^|\\\\s)(@)(?:-(?:webkit|moz)-)?keyframes\\\\b","beginCaptures":{"0":{"name":"keyword.control.at-rule.keyframes.scss"},"1":{"name":"punctuation.definition.keyword.scss"}},"end":"(?<=})","name":"meta.at-rule.keyframes.scss","patterns":[{"captures":{"1":{"name":"entity.name.function.scss"}},"match":"(?<=@keyframes)\\\\s+((?:[_A-Za-z][-\\\\w]|-[_A-Za-z])[-\\\\w]*)"},{"begin":"(?<=@keyframes)\\\\s+(\\")","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.scss"}},"contentName":"entity.name.function.scss","end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.scss"}},"name":"string.quoted.double.scss","patterns":[{"match":"\\\\\\\\(\\\\h{1,6}|.)","name":"constant.character.escape.scss"},{"include":"#interpolation"}]},{"begin":"(?<=@keyframes)\\\\s+(')","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.scss"}},"contentName":"entity.name.function.scss","end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.scss"}},"name":"string.quoted.single.scss","patterns":[{"match":"\\\\\\\\(\\\\h{1,6}|.)","name":"constant.character.escape.scss"},{"include":"#interpolation"}]},{"begin":"{","beginCaptures":{"0":{"name":"punctuation.section.keyframes.begin.scss"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.keyframes.end.scss"}},"patterns":[{"match":"\\\\b(?:(?:100|[1-9]\\\\d|\\\\d)%|from|to)(?=\\\\s*{)","name":"entity.other.attribute-name.scss"},{"include":"#flow_control"},{"include":"#interpolation"},{"include":"#property_list"},{"include":"#rules"}]}]},"at_rule_media":{"patterns":[{"begin":"^\\\\s*((@)media)\\\\b","beginCaptures":{"1":{"name":"keyword.control.at-rule.media.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.media.scss","patterns":[{"include":"#comment_docblock"},{"include":"#comment_block"},{"include":"#comment_line"},{"match":"\\\\b(only)\\\\b","name":"keyword.control.operator.css.scss"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.media-query.begin.bracket.round.scss"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.media-query.end.bracket.round.scss"}},"name":"meta.property-list.media-query.scss","patterns":[{"begin":"(?<![-a-z])(?=[-a-z])","end":"$|(?![-a-z])","name":"meta.property-name.media-query.scss","patterns":[{"include":"source.css#media-features"},{"include":"source.css#property-names"}]},{"begin":"(:)\\\\s*(?!(\\\\s*{))","beginCaptures":{"1":{"name":"punctuation.separator.key-value.scss"}},"contentName":"meta.property-value.media-query.scss","end":"\\\\s*(;|(?=}|\\\\)))","endCaptures":{"1":{"name":"punctuation.terminator.rule.scss"}},"patterns":[{"include":"#general"},{"include":"#property_values"}]}]},{"include":"#variable"},{"include":"#conditional_operators"},{"include":"source.css#media-types"}]}]},"at_rule_mixin":{"patterns":[{"begin":"(?<=@mixin)\\\\s+([\\\\w-]+)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.scss"},"2":{"name":"punctuation.definition.parameters.begin.bracket.round.scss"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.scss"}},"name":"meta.at-rule.mixin.scss","patterns":[{"include":"#function_attributes"}]},{"captures":{"1":{"name":"entity.name.function.scss"}},"match":"(?<=@mixin)\\\\s+([\\\\w-]+)","name":"meta.at-rule.mixin.scss"},{"captures":{"1":{"name":"keyword.control.at-rule.mixin.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"match":"((@)mixin)\\\\b","name":"meta.at-rule.mixin.scss"}]},"at_rule_namespace":{"patterns":[{"begin":"(?<=@namespace)\\\\s+(?=url)","end":"(?=;|$)","name":"meta.at-rule.namespace.scss","patterns":[{"include":"#property_values"},{"include":"#string_single"},{"include":"#string_double"}]},{"begin":"(?<=@namespace)\\\\s+([\\\\w-]*)","captures":{"1":{"name":"entity.name.namespace-prefix.scss"}},"end":"(?=;|$)","name":"meta.at-rule.namespace.scss","patterns":[{"include":"#variables"},{"include":"#property_values"},{"include":"#string_single"},{"include":"#string_double"}]},{"captures":{"1":{"name":"keyword.control.at-rule.namespace.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"match":"((@)namespace)\\\\b","name":"meta.at-rule.namespace.scss"}]},"at_rule_option":{"captures":{"1":{"name":"keyword.control.at-rule.charset.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"match":"^\\\\s*((@)option\\\\b)\\\\s*","name":"meta.at-rule.option.scss"},"at_rule_page":{"patterns":[{"begin":"^\\\\s*((@)page)(?=:|\\\\s)\\\\s*([-:\\\\w]*)","captures":{"1":{"name":"keyword.control.at-rule.page.scss"},"2":{"name":"punctuation.definition.keyword.scss"},"3":{"name":"entity.name.function.scss"}},"end":"\\\\s*(?={)","name":"meta.at-rule.page.scss"}]},"at_rule_return":{"begin":"\\\\s*((@)(return)\\\\b)","captures":{"1":{"name":"keyword.control.return.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*((?=;))","name":"meta.at-rule.return.scss","patterns":[{"include":"#variable"},{"include":"#property_values"}]},"at_rule_supports":{"begin":"(?<=^|\\\\s)(@)supports\\\\b","captures":{"0":{"name":"keyword.control.at-rule.supports.scss"},"1":{"name":"punctuation.definition.keyword.scss"}},"end":"(?={)|$","name":"meta.at-rule.supports.scss","patterns":[{"include":"#logical_operators"},{"include":"#properties"},{"match":"\\\\(","name":"punctuation.definition.condition.begin.bracket.round.scss"},{"match":"\\\\)","name":"punctuation.definition.condition.end.bracket.round.scss"}]},"at_rule_use":{"begin":"\\\\s*((@)use\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.at-rule.use.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?=;)","name":"meta.at-rule.use.scss","patterns":[{"match":"\\\\b(as|with)\\\\b","name":"keyword.control.operator"},{"match":"\\\\b[\\\\w-]+\\\\b","name":"variable.scss"},{"match":"\\\\*","name":"variable.language.expanded-namespace.scss"},{"include":"#string_single"},{"include":"#string_double"},{"include":"#comment_line"},{"include":"#comment_block"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.bracket.round.scss"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.scss"}},"patterns":[{"include":"#function_attributes"}]}]},"at_rule_warn":{"begin":"\\\\s*((@)(warn|debug|error)\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.warn.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?=;)","name":"meta.at-rule.warn.scss","patterns":[{"include":"#variable"},{"include":"#string_double"},{"include":"#string_single"}]},"at_rule_while":{"begin":"\\\\s*((@)while\\\\b)\\\\s*","captures":{"1":{"name":"keyword.control.while.scss"},"2":{"name":"punctuation.definition.keyword.scss"}},"end":"\\\\s*(?=})","name":"meta.at-rule.while.scss","patterns":[{"include":"#conditional_operators"},{"include":"#variable"},{"include":"#property_values"},{"include":"$self"}]},"comment_block":{"begin":"/\\\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.scss"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.scss"}},"name":"comment.block.scss"},"comment_docblock":{"begin":"///","beginCaptures":{"0":{"name":"punctuation.definition.comment.scss"}},"end":"(?=$)","name":"comment.block.documentation.scss","patterns":[{"include":"source.sassdoc"}]},"comment_line":{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.scss"}},"end":"\\\\n","name":"comment.line.scss"},"comparison_operators":{"match":"==|!=|<=|>=|<|>","name":"keyword.operator.comparison.scss"},"conditional_operators":{"patterns":[{"include":"#comparison_operators"},{"include":"#logical_operators"}]},"constant_default":{"match":"!default","name":"keyword.other.default.scss"},"constant_functions":{"begin":"(?:([\\\\w-]+)(\\\\.))?([\\\\w-]+)(\\\\()","beginCaptures":{"1":{"name":"variable.scss"},"2":{"name":"punctuation.access.module.scss"},"3":{"name":"support.function.misc.scss"},"4":{"name":"punctuation.section.function.scss"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.section.function.scss"}},"patterns":[{"include":"#parameters"}]},"constant_important":{"match":"!important","name":"keyword.other.important.scss"},"constant_mathematical_symbols":{"match":"\\\\b(\\\\+|-|\\\\*|/)\\\\b","name":"support.constant.mathematical-symbols.scss"},"constant_optional":{"match":"!optional","name":"keyword.other.optional.scss"},"constant_sass_functions":{"begin":"(headings|stylesheet-url|rgba?|hsla?|ie-hex-str|red|green|blue|alpha|opacity|hue|saturation|lightness|prefixed|prefix|-moz|-svg|-css2|-pie|-webkit|-ms|font-(?:files|url)|grid-image|image-(?:width|height|url|color)|sprites?|sprite-(?:map|map-name|file|url|position)|inline-(?:font-files|image)|opposite-position|grad-point|grad-end-position|color-stops|color-stops-in-percentages|grad-color-stops|(?:radial|linear)-(?:gradient|svg-gradient)|opacify|fade-?in|transparentize|fade-?out|lighten|darken|saturate|desaturate|grayscale|adjust-(?:hue|lightness|saturation|color)|scale-(?:lightness|saturation|color)|change-color|spin|complement|invert|mix|-compass-(?:list|space-list|slice|nth|list-size)|blank|compact|nth|first-value-of|join|length|append|nest|append-selector|headers|enumerate|range|percentage|unitless|unit|if|type-of|comparable|elements-of-type|quote|unquote|escape|e|sin|cos|tan|abs|round|ceil|floor|pi|translate(?:X|Y))(\\\\()","beginCaptures":{"1":{"name":"support.function.misc.scss"},"2":{"name":"punctuation.section.function.scss"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.section.function.scss"}},"patterns":[{"include":"#parameters"}]},"flow_control":{"patterns":[{"include":"#at_rule_if"},{"include":"#at_rule_else"},{"include":"#at_rule_warn"},{"include":"#at_rule_for"},{"include":"#at_rule_while"},{"include":"#at_rule_each"},{"include":"#at_rule_return"}]},"function_attributes":{"patterns":[{"match":":","name":"punctuation.separator.key-value.scss"},{"include":"#general"},{"include":"#property_values"},{"match":"[={}?;@]","name":"invalid.illegal.scss"}]},"functions":{"patterns":[{"begin":"([\\\\w-]{1,})(\\\\()\\\\s*","beginCaptures":{"1":{"name":"support.function.misc.scss"},"2":{"name":"punctuation.section.function.scss"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.section.function.scss"}},"patterns":[{"include":"#parameters"}]},{"match":"([\\\\w-]{1,})","name":"support.function.misc.scss"}]},"general":{"patterns":[{"include":"#variable"},{"include":"#comment_docblock"},{"include":"#comment_block"},{"include":"#comment_line"}]},"interpolation":{"begin":"#{","beginCaptures":{"0":{"name":"punctuation.definition.interpolation.begin.bracket.curly.scss"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.interpolation.end.bracket.curly.scss"}},"name":"variable.interpolation.scss","patterns":[{"include":"#variable"},{"include":"#property_values"}]},"logical_operators":{"match":"\\\\b(not|or|and)\\\\b","name":"keyword.operator.logical.scss"},"map":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.map.begin.bracket.round.scss"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.map.end.bracket.round.scss"}},"name":"meta.definition.variable.map.scss","patterns":[{"include":"#comment_docblock"},{"include":"#comment_block"},{"include":"#comment_line"},{"captures":{"1":{"name":"support.type.map.key.scss"},"2":{"name":"punctuation.separator.key-value.scss"}},"match":"\\\\b([\\\\w-]+)\\\\s*(:)"},{"match":",","name":"punctuation.separator.delimiter.scss"},{"include":"#map"},{"include":"#variable"},{"include":"#property_values"}]},"operators":{"match":"[-+*/](?!\\\\s*[-+*/])","name":"keyword.operator.css"},"parameters":{"patterns":[{"include":"#variable"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.begin.bracket.round.scss"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.end.bracket.round.scss"}},"patterns":[{"include":"#function_attributes"}]},{"include":"#property_values"},{"include":"#comment_block"},{"match":"[^'\\",) \\\\t]+","name":"variable.parameter.url.scss"},{"match":",","name":"punctuation.separator.delimiter.scss"}]},"parent_selector_suffix":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.identifier.scss"}]}},"match":"(?<=&)((?:[-a-zA-Z_0-9]|[^\\\\x00-\\\\x7F]|\\\\\\\\(?:[0-9a-fA-F]{1,6}|.)|\\\\#\\\\{|\\\\$|})+)(?=$|[\\\\s,.#)\\\\[:{>+~|]|/\\\\*)","name":"entity.other.attribute-name.parent-selector-suffix.css"},"properties":{"patterns":[{"begin":"(?<![-a-z])(?=[-a-z])","end":"$|(?![-a-z])","name":"meta.property-name.scss","patterns":[{"include":"source.css#property-names"},{"include":"#at_rule_include"}]},{"begin":"(:)\\\\s*(?!(\\\\s*{))","beginCaptures":{"1":{"name":"punctuation.separator.key-value.scss"}},"contentName":"meta.property-value.scss","end":"\\\\s*(;|(?=}|\\\\)))","endCaptures":{"1":{"name":"punctuation.terminator.rule.scss"}},"patterns":[{"include":"#general"},{"include":"#property_values"}]}]},"property_list":{"begin":"{","beginCaptures":{"0":{"name":"punctuation.section.property-list.begin.bracket.curly.scss"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.property-list.end.bracket.curly.scss"}},"name":"meta.property-list.scss","patterns":[{"include":"#flow_control"},{"include":"#rules"},{"include":"#properties"},{"include":"$self"}]},"property_values":{"patterns":[{"include":"#string_single"},{"include":"#string_double"},{"include":"#constant_functions"},{"include":"#constant_sass_functions"},{"include":"#constant_important"},{"include":"#constant_default"},{"include":"#constant_optional"},{"include":"source.css#numeric-values"},{"include":"source.css#property-keywords"},{"include":"source.css#color-keywords"},{"include":"source.css#property-names"},{"include":"#constant_mathematical_symbols"},{"include":"#operators"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.begin.bracket.round.scss"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.end.bracket.round.scss"}},"patterns":[{"include":"#general"},{"include":"#property_values"}]}]},"rules":{"patterns":[{"include":"#general"},{"include":"#at_rule_extend"},{"include":"#at_rule_content"},{"include":"#at_rule_include"},{"include":"#at_rule_media"},{"include":"#selectors"}]},"selector_attribute":{"captures":{"1":{"name":"punctuation.definition.attribute-selector.begin.bracket.square.scss"},"2":{"name":"entity.other.attribute-name.attribute.scss","patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.scss"}]},"3":{"name":"keyword.operator.scss"},"4":{"name":"string.unquoted.attribute-value.scss","patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.scss"}]},"5":{"name":"string.quoted.double.attribute-value.scss"},"6":{"name":"punctuation.definition.string.begin.scss"},"7":{"patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.scss"}]},"8":{"name":"punctuation.definition.string.end.scss"},"9":{"name":"string.quoted.single.attribute-value.scss"},"10":{"name":"punctuation.definition.string.begin.scss"},"11":{"patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.scss"}]},"12":{"name":"punctuation.definition.string.end.scss"},"13":{"name":"punctuation.definition.attribute-selector.end.bracket.square.scss"}},"match":"(?i)(\\\\[)\\\\s*((?:[-a-zA-Z_0-9]|[^\\\\x00-\\\\x7F]|\\\\\\\\(?:[0-9a-fA-F]{1,6}|.)|\\\\#\\\\{|\\\\.?\\\\$|})+?)(?:\\\\s*([~|^$*]?=)\\\\s*(?:((?:[-a-zA-Z_0-9]|[^\\\\x00-\\\\x7F]|\\\\\\\\(?:[0-9a-fA-F]{1,6}|.)|\\\\#\\\\{|\\\\.?\\\\$|})+)|((\\")(.*?)(\\"))|((')(.*?)('))))?\\\\s*(\\\\])","name":"meta.attribute-selector.scss"},"selector_class":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.scss"}]}},"match":"(\\\\.)((?:[-a-zA-Z_0-9]|[^\\\\x00-\\\\x7F]|\\\\\\\\(?:[0-9a-fA-F]{1,6}|.)|\\\\#\\\\{|\\\\.?\\\\$|})+)(?=$|[\\\\s,#)\\\\[:{>+~|]|\\\\.[^$]|/\\\\*|;)","name":"entity.other.attribute-name.class.css"},"selector_custom":{"match":"\\\\b([a-zA-Z0-9]+(-[a-zA-Z0-9]+)+)(?=\\\\.|\\\\s++[^:]|\\\\s*[,\\\\[{]|:(link|visited|hover|active|focus|target|lang|disabled|enabled|checked|indeterminate|root|nth-(child|last-child|of-type|last-of-type)|first-child|last-child|first-of-type|last-of-type|only-child|only-of-type|empty|not|valid|invalid)(\\\\([0-9A-Za-z]*\\\\))?)","name":"entity.name.tag.custom.scss"},"selector_id":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.identifier.scss"}]}},"match":"(\\\\#)((?:[-a-zA-Z_0-9]|[^\\\\x00-\\\\x7F]|\\\\\\\\(?:[0-9a-fA-F]{1,6}|.)|\\\\#\\\\{|\\\\.?\\\\$|})+)(?=$|[\\\\s,#)\\\\[:{>+~|]|\\\\.[^$]|/\\\\*)","name":"entity.other.attribute-name.id.css"},"selector_placeholder":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#interpolation"},{"match":"\\\\\\\\([0-9a-fA-F]{1,6}|.)","name":"constant.character.escape.scss"},{"match":"\\\\$|}","name":"invalid.illegal.identifier.scss"}]}},"match":"(%)((?:[-a-zA-Z_0-9]|[^\\\\x00-\\\\x7F]|\\\\\\\\(?:[0-9a-fA-F]{1,6}|.)|\\\\#\\\\{|\\\\.\\\\$|\\\\$|})+)(?=;|$|[\\\\s,#)\\\\[:{>+~|]|\\\\.[^$]|/\\\\*)","name":"entity.other.attribute-name.placeholder.css"},"selector_pseudo_class":{"patterns":[{"begin":"((:)\\\\bnth-(?:child|last-child|of-type|last-of-type))(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.definition.pseudo-class.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.pseudo-class.end.bracket.round.css"}},"patterns":[{"include":"#interpolation"},{"match":"\\\\d+","name":"constant.numeric.css"},{"match":"(?<=\\\\d)n\\\\b|\\\\b(n|even|odd)\\\\b","name":"constant.other.scss"},{"match":"\\\\w+","name":"invalid.illegal.scss"}]},{"include":"source.css#pseudo-classes"},{"include":"source.css#pseudo-elements"},{"include":"source.css#functional-pseudo-classes"}]},"selectors":{"patterns":[{"include":"source.css#tag-names"},{"include":"#selector_custom"},{"include":"#selector_class"},{"include":"#selector_id"},{"include":"#selector_pseudo_class"},{"include":"#tag_wildcard"},{"include":"#tag_parent_reference"},{"include":"source.css#pseudo-elements"},{"include":"#selector_attribute"},{"include":"#selector_placeholder"},{"include":"#parent_selector_suffix"}]},"string_double":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.scss"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.scss"}},"name":"string.quoted.double.scss","patterns":[{"match":"\\\\\\\\(\\\\h{1,6}|.)","name":"constant.character.escape.scss"},{"include":"#interpolation"}]},"string_single":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.scss"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.scss"}},"name":"string.quoted.single.scss","patterns":[{"match":"\\\\\\\\(\\\\h{1,6}|.)","name":"constant.character.escape.scss"},{"include":"#interpolation"}]},"tag_parent_reference":{"match":"&","name":"entity.name.tag.reference.scss"},"tag_wildcard":{"match":"\\\\*","name":"entity.name.tag.wildcard.scss"},"variable":{"patterns":[{"include":"#variables"},{"include":"#interpolation"}]},"variable_setting":{"begin":"(?=\\\\$[\\\\w-]+\\\\s*:)","contentName":"meta.definition.variable.scss","end":";","endCaptures":{"0":{"name":"punctuation.terminator.rule.scss"}},"patterns":[{"match":"\\\\$[\\\\w-]+(?=\\\\s*:)","name":"variable.scss"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.key-value.scss"}},"end":"(?=;)","patterns":[{"include":"#comment_docblock"},{"include":"#comment_block"},{"include":"#comment_line"},{"include":"#map"},{"include":"#property_values"},{"include":"#variable"},{"match":",","name":"punctuation.separator.delimiter.scss"}]}]},"variables":{"patterns":[{"captures":{"1":{"name":"variable.scss"},"2":{"name":"punctuation.access.module.scss"},"3":{"name":"variable.scss"}},"match":"\\\\b([\\\\w-]+)(\\\\.)(\\\\$[\\\\w-]+)\\\\b"},{"match":"(\\\\$|--)[A-Za-z0-9_-]+\\\\b","name":"variable.scss"}]}},"scopeName":"source.css.scss","embeddedLangs":["css"]}`)),s=[...e,n];export{s as a};
