import "brace/mode/java";

const identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*";

var KoaHighlightRules = function () {
    const keywords = (
        "int|string|bool|" +
        "if|else|func|return"

    );


    var keywordMapper = this.createKeywordMapper({
        "koa_keyword": keywords,
        "koa_bool": "true|false"
    }, "koa_identifier");

    this.$rules = {
        start: [
            {
                token: "koa_comment", //single
                regex: "\\/\\/.*$"
            },
            {
                token: "koa_comment",
                regex: "\\/\\*$",
                next: "koa_comment"
            }, {
                token: "koa_number", // hex
                regex: /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
            }, {
                token: "koa_number", // float
                regex: /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
            },
            {
                token: "koa_contract",
                regex: "\\b(contract)\\b"
            },
            {
                token: keywordMapper,
                regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
                token: "koa_string",
                regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
                token: "koa_operator",
                regex: "!|%|\\*|\\-|\\+|=|!|==|!=|<|<=|>|>=|&&|\\|\\||&=|\\^="
            }, {
                token: "koa_paren.l",
                regex: "[[({]"
            }, {
                token: "koa_paren.r",
                regex: "[\\])}]"
            }
        ],
        "koa_comment": [
            {
                token: "koa_comment", // closing comment
                regex: "\\*\\/",
                next: "start"
            }, {
                defaultToken: "koa_comment"
            }
        ]
    };


};

var inherits = function (ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

inherits(KoaHighlightRules, window.ace.acequire(
    "ace/mode/text_highlight_rules"
).TextHighlightRules);
//
// export class CustomKoaRules extends window.ace.acequire(
//     "ace/mode/text_highlight_rules"
// ).TextHighlightRules {
//     constructor() {
//         super();
//         this.$rules = {
//             start: [
//                 {
//                     token: "koa_comment", //single
//                     regex: "\\/\\/.*$"
//                 },
//                 {
//                     token : "koa_comment",
//                     regex : "\\/\\*$",
//                     next : "koa_comment"
//                 },{
//                     token : "koa_number", // hex
//                     regex : /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
//                 }, {
//                     token : "koa_number", // float
//                     regex : /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
//                 },
//                 {
//                     token: "koa_contract",
//                     regex: "\\b(contract)\\b"
//                 },
//                 {
//                     token: "koa_keyword",
//                     regex: "\\b(func|return|if)\\b"
//                 },
//                 {
//                     token: "koa_string",
//                     regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
//                 },{
//                     token : "koa_bool",
//                     regex : "(?:true|false)\\b"
//                 }, {
//                     token : "koa_operator",
//                     regex : "!|%|\\*|\\-|\\+|=|!|==|!=|<|<=|>|>=|&&|\\|\\||&=|\\^="
//                 }, {
//                     token : "koa_paren.l",
//                     regex : "[[({]"
//                 }, {
//                     token : "koa_paren.r",
//                     regex : "[\\])}]"
//                 }
//             ],
//             "koa_comment" : [
//                 {
//                     token : "koa_comment", // closing comment
//                     regex : "\\*\\/",
//                     next : "start"
//                 }, {
//                     defaultToken : "koa_comment"
//                 }
//             ]
//         };
//     }
// }

export default class CustomKoaMode extends window.ace.acequire("ace/mode/java")
    .Mode {
    constructor() {
        super();
        this.HighlightRules = KoaHighlightRules;
    }
}