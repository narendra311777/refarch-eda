(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"6mU6":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return d}));var n,s=t("wx14"),r=t("zLVn"),i=(t("q1tI"),t("7ljp")),o=t("013z"),c=(t("qKvR"),{}),m=(n="InlineNotification",function(e){return console.warn("Component '"+n+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:c},h=o.a;function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(h,Object(s.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Apache Avro"),Object(i.b)("p",null,"Avro is an open source data serialization system that helps with data exchange between systems, programming languages, and processing frameworks. Avro helps define a binary format for your data, as well as map it to the programming language of your choice."),Object(i.b)("h3",null,"Why Apache Avro"),Object(i.b)("p",null,"There are several websites that discuss the Apache Avro data serialization system benefits over other messaging data protocols. A simple google search will list dozens of them. Here, we will highlight just a few from a ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://www.confluent.io/blog/avro-kafka-data/"}),"Confluent blog post"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It has a direct mapping to and from JSON"),Object(i.b)("li",{parentName:"ul"},"It has a very compact format. The bulk of JSON, repeating every field name with every single record, is what makes JSON inefficient for high-volume usage."),Object(i.b)("li",{parentName:"ul"},"It is very fast."),Object(i.b)("li",{parentName:"ul"},"It has great bindings for a wide variety of programming languages so you can generate Java objects that make working with event data easier, but it does not require code generation so tools can be written generically for any data stream."),Object(i.b)("li",{parentName:"ul"},"It has a rich, extensible schema language defined in pure JSON"),Object(i.b)("li",{parentName:"ul"},"It has the best notion of compatibility for evolving your data over time.")),Object(i.b)("h2",null,"Data Schemas"),Object(i.b)("p",null,"Avro relies on schemas. When Avro data is produced or read, the Avro schema for such piece of data is always present. This permits each datum to be written with no per-value overheads, making serialization both fast and small. An Avro schema defines the structure of the Avro data format."),Object(i.b)("h3",null,"How does a data schema look like?"),Object(i.b)("p",null,"Let’s see how a data schema to define a person’s profile in a bank could look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-json"}),'{\n  "namespace": "banking.schemas.demo",\n  "name": "profile",\n  "type": "record",\n  "doc": "Data schema to represent a profile for a banking entity",\n  "fields ": [\n    {\n      "name": "name",\n      "type": "string"\n    },\n    {\n      "name": "surname",\n      "type": "string"\n    },\n    {\n      "name": "age",\n      "type": "int"\n    },\n    {\n      "name": "account",\n      "type": "banking.schemas.demo.account"\n    },\n    {\n      "name": "gender",\n      "type": {\n        "type": "enum",\n        "name": "genderEnum",\n        "symbols": [\n          "male",\n          "female"\n        ]\n      }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Notice:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"There are primitive data types like ",Object(i.b)("inlineCode",{parentName:"li"},"string")," and ",Object(i.b)("inlineCode",{parentName:"li"},"int")," but also complex types like ",Object(i.b)("inlineCode",{parentName:"li"},"record")," or ",Object(i.b)("inlineCode",{parentName:"li"},"enum"),"."),Object(i.b)("li",{parentName:"ol"},"Complex type ",Object(i.b)("inlineCode",{parentName:"li"},"record")," requires a ",Object(i.b)("inlineCode",{parentName:"li"},"name")," attribute but it also can go along with a ",Object(i.b)("inlineCode",{parentName:"li"},"namespace")," attribute which is a JSON string that qualifies the name."),Object(i.b)("li",{parentName:"ol"},"Data schemas can be ",Object(i.b)("strong",{parentName:"li"},"nested")," as you can see for the ",Object(i.b)("inlineCode",{parentName:"li"},"account")," data attribute. See below.")),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-json"}),'{\n  "namespace": "banking.schemas.demo",\n  "name": "account",\n  "type": "record",\n  "doc": "Data schema to represent a customer account with the credit cards associated to it",\n  "fields": [\n    {\n      "name": "id",\n      "type": "string"\n    },\n    {\n      "name": "savings",\n      "type": "long"\n    },\n    {\n      "name": "cards",\n      "type": {\n        "type": "array",\n        "items": "int"\n      }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"In the picture below we see two messages, one complies with the above Apache Avro data schema and the other does not: "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABQElEQVQoz3VSa3ODIBD0///ATL7kMZmkMVF8AoIHbBdj2tpOb9w5hXPZPa7ovYb2E2ExOgMbPKYVWia4MCNHIqLWCOMIYRbmwIxpQiJgLcC1wkWBGTVUrXC7XtG1Hd4RU4SP34RwDrMIqrpG+Xjgershxvi1n4kLj4BGKZzPZ2ieaPNpa4XEAPebkDieTlBtC8NaCYGbiU9a1BYuUaE2KMuS9Y5rE+b5RSLpL6FQ4fN+hwzDyybX3rEozD3LUVUVDocDdrvdojb/OAfZWE6ZIB/kPT6ORzxZf9nvYYxByEp/Eg5saN/3aGmlZo+6roOXmYSy6VEOTweqadBR5YNCFFuWnWW1Rf7B0nKjGlrnLYr8fylrzyoSaKoyq+KN5daN0LPF4A0Gjs3IdyNuwSB2GZ/N2FDVMjo5E4nEC/II8fsTsaduanpWy2IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"data examples",title:"data examples",src:"/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/3cbba/data_examples.png",srcSet:["/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/7fc1e/data_examples.png 288w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/a5df1/data_examples.png 576w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/3cbba/data_examples.png 1152w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/0b124/data_examples.png 1728w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/983e6/data_examples.png 2190w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"You might start realising by now the benefits of having the data flowing into your Apache Kafka event backbone validated against a schema. See next section for more."),Object(i.b)("p",null,"For more information on the Apache Avro Data Schema specification see ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://avro.apache.org/docs/current/spec.html"}),"https://avro.apache.org/docs/current/spec.html")),Object(i.b)("h3",null,"Benefits of using Data Schemas"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Clarity and Semantics"),": They document the usage of the event and the meaning of each field in the “doc” fields."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Robustness"),": They protect downstream data consumers from malformed  data, as only valid data will be permitted in the topic. They let the producers or consumers of data streams know the right fields are need in an event and what type each field is (contract for microservices)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Compatibility"),": model and handle change in data format.")),Object(i.b)("h2",null,"Avro, Kafka and Schema Registry"),Object(i.b)("p",null,"In this section we try to put all the pieces together for the common flow of sending and receiving messages through an event backbone such as kafka having those messages serialized using the Apache Avro data serialization system and complying with their respective messages that are stored and managed by a schema registry."),Object(i.b)("p",null,"Avro relies on schemas. When Avro data is produced or read, the Avro schema for such piece of data is always present. An Avro schema defines the structure of the Avro data format. Schema Registry defines a scope in which schemas can evolve, and that scope is the subject. The name of the subject depends on the configured subject name strategy, which by default is set to derive subject name from topic name."),Object(i.b)("p",null,"In this case, the messages are serialized using Avro and sent to a kafka topic. Each message is a key-value pair. Either the message key or the message value, or both, can be serialized as Avro. Integration with Schema Registry means that Kafka messages do not need to be written with the entire Avro schema. Instead, Kafka messages are written with the ",Object(i.b)("strong",{parentName:"p"},"schema id"),". The producers writing the messages and the consumers reading the messages must be using the same Schema Registry to get the same mapping between a schema and schema id."),Object(i.b)("h3",null,"How does it all work"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"960px"}},"\n      ",Object(i.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABibAAAYmwFJdYOUAAAB40lEQVQoz41SWW/TQBD2/38H8UQlQKoQD6gI0YYeoAa1VZAatWpRgIbmclucOD53vcfYH7N2rUTpCyONdnd25vvm8pStME8tgsQgzAmWShSS4Ps54ljDGIKSBjLXUMIgSzVGIwH/TkKwTfNfWVZwYjjWmy0N3p0usX28wKd+gvlcIg4L3I4IQaBBTFgkFiLhe01mEMxLLEKCNhZWU03UiudHhPe9ENtfJ9i7zJBktv4QhcDtfYTheIyz7+cYj/3aTkRYl5JJWsCqquDlivBrFuPnJMbwLga16VtCKi2Oul283dnB4Obm0W45sAl2p8NXglC1gEQW0TKEVgZkCtRej5mUJaFQis+yVsskTpt+Vej9KXB4EeCg/xdnwwJScw8daprzQCLDPalqltIpZ+qydfjuvq5ONPf2Yz/Dqy8PtX44T5ErB8jJzhca05lGmhr8rzjcwb1C73eOk0GGa5+3gEm8prwSOa+Ayy4rCJ2LCPvXOQ5/CHy+TNBhPeD3kXtfCUxDw6tkkSYEw1POUsHDaZLxWkbJQJKdgkjj2f4DXnZjvD6J8aLj4/nuFFvHId6cptj6luBqIrnvriqDZVQgihOuLmuG0kyrelJSM8lN26Zv9eTfW3dcBWwEbdjalVmtz4roH/omS8rDDIRCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"schema registry management",title:"schema registry management",src:"/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/4552c/schema-registry.png",srcSet:["/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/7fc1e/schema-registry.png 288w","/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/a5df1/schema-registry.png 576w","/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/4552c/schema-registry.png 960w"],sizes:"(max-width: 960px) 100vw, 960px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"When the producer sends a message/event to a Kafka topic for the first time, it sends the schema for that message/event to the Schema Registry. The Schema Registry registers this schema to the subject for the Kafka topic we want to send the message/event to, and returns the ",Object(i.b)("strong",{parentName:"p"},"schema id")," to the producer. The producer ",Object(i.b)("strong",{parentName:"p"},"caches this mapping between the schema and schema id")," for subsequent message writes, so ",Object(i.b)("strong",{parentName:"p"},"it only contacts Schema Registry on the first message/event write")," (unless the schema has changed, that is evolved, when the schema registry will be contacted again for validation and storage of this new version of the schema). Kafka messages are written along with the ",Object(i.b)("strong",{parentName:"p"},"schema id")," rather than with the entire data schema."),Object(i.b)("p",null,"When a consumer reads this data, it sees the ",Object(i.b)("strong",{parentName:"p"},"Avro schema id and sends a schema request to the Schema Registry"),". The Schema Registry retrieves the schema associated to that schema id, and ",Object(i.b)("strong",{parentName:"p"},"returns the schema to the consumer"),". The consumer ",Object(i.b)("strong",{parentName:"p"},"caches")," this mapping between the schema and schema id for subsequent message reads, so it only contacts Schema Registry on the first schema id read."),Object(i.b)("h2",null,"Schema Registry"),Object(i.b)(m,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,"The information below corresponds to the Schema Registry implementation in the IBM Event Streams product that is part of the IBM CloudPak for Integration. For the IBM Event Streams on IBM Cloud offering, this implementation might differ.")),Object(i.b)("p",null,"Kafka is used as Schema Registry storage backend. The special Kafka topic ",Object(i.b)("inlineCode",{parentName:"p"},"<kafkastore.topic>")," (default ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas"),"), with a single partition, is used as a highly available write ahead log. All schemas, subject/version and ID metadata, and compatibility settings are appended as messages to this log. A Schema Registry instance therefore both produces and consumes messages under the ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas")," topic. It produces messages to the log when, for example, new schemas are registered under a subject, or when updates to compatibility settings are registered. Schema Registry consumes from the ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas")," log in a background thread, and updates its local caches on consumption of each new ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas")," message to reflect the newly added schema or compatibility setting. Updating local state from the Kafka log in this manner ensures durability, ordering, and easy recoverability."),Object(i.b)("h2",null,"Labs"),Object(i.b)("p",null,"We have developed two labs, one for the IBM Event Streams product that comes with the IBM CloudPak for Integration installed on a RedHat OpenShift cluster and the other for the IBM Event Streams on IBM Cloud offering, to get hands-on experience working with Apache Avro, data schemas and the IBM Event Streams Schema Registry:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"../event-streams/schema-registry"}),"IBM Event Streams on IBM Cloud lab")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"../event-streams/schema-registry-cp4i-v10"}),"IBM Event Streams from IBM CloudPak for Integration lab"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-avro-schemas-index-mdx-2b0758e45823e270758c.js.map