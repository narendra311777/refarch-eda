(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{jn9m:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return p}));var n=t("wx14"),s=t("zLVn"),i=(t("q1tI"),t("7ljp")),o=t("013z"),r=(t("qKvR"),{}),c={_frontmatter:r},l=o.a;function p(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Saga"),Object(i.b)("h2",null,"Problems and Constraints"),Object(i.b)("p",null,"With the adoption of one data source per microservice, there is an interesting challenge on how to support long running transaction cross microservices. With event backbone two phase commit is not an option."),Object(i.b)("h2",null,"Solution and Pattern"),Object(i.b)("p",null,"Introduced in 1987 ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf"}),"by Hector Garcaa-Molrna Kenneth Salem paper")," the Saga pattern help to support a long running transaction that can be broken up to a collection of sub transactions that can be interleaved any way with other transactions."),Object(i.b)("p",null,"With microservice each transaction updates data within a single service, each subsequent steps may be triggered by previous completion. The following figure, based on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc"}),"our solution implementation"),", illustrates those concepts for an order transaction:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1056px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6klEQVQoz12RS09TURSF+U1OTBw40IHxNXVi4j9wgDEhKmpoGWiIMYqJRmlDrUGkrQRibQpao6IixVq01lL0ArVUeRVo6e3jPj73vX3QsJJ9Hjtnr7P2Xh0IwrM53JMK7gkFJVekqNYYlHtwZoXht8toukGhVGPkfYaX0Rw+2ctVnflsAe/rRfxTGULCYaHDWvzTWa644lzzfiO9ustWscqlwTn6/D/pfZqwCfOS6xlKcMOXxCG7RRj7lafLHccpb1zh33VC3dAJ9X/h7rkg/RKJyDJNlMoa+7E/Z5omhmG2zrbCN48T3Dwzxq2zL0hH/7YeV9oKm0W7mtEqtu8yHiskUSfU0Qjdj9F9ZJjrx0aYGV/AlOLwwzie7ndEPAmqDVVVVUNJbaJK+01UhURrU2sr/PQ8zaPOCAMS89M5/i3l7Q96jvtwnPRT2FT5k9yg69ATrh59xsWDXpJTWZtkZXEbJbGOJjNtmWKh3GjBgq5rtoqF72uUxV0La9ktW/Xo7SjBezFKOxUmBuboPODh8uEhHCf87Kyr0rKp8WEkxYPzr3BdiKB8XW0Rq3pjXsbeZ8XKnimZHxuMi6Fjd2b5GEhRLJTqhKN9n3GeDuA8FSA+uVRXKcPfFpXtDhq6aed0+cg622ZJ1Nq6+w/pFIJU9DcDxgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/a3f8d1f85f507b4c0567fa8d0b61fa87/79f13/saga-ctx.png",srcSet:["/refarch-eda/static/a3f8d1f85f507b4c0567fa8d0b61fa87/7fc1e/saga-ctx.png 288w","/refarch-eda/static/a3f8d1f85f507b4c0567fa8d0b61fa87/a5df1/saga-ctx.png 576w","/refarch-eda/static/a3f8d1f85f507b4c0567fa8d0b61fa87/79f13/saga-ctx.png 1056w"],sizes:"(max-width: 1056px) 100vw, 1056px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"When the order is created, the business process says, we need to allocate a “voyage”, assign containers and update the list of containers to load on the ship. Those actions / commands are chained. The final state (in this schema, not in the reality, as the process has more steps) is the Order assigned state in the order microservice."),Object(i.b)("p",null,"With a unique application implementation, the integrity between order, voyage and container tables will be done via transactions. With distributed system we could not apply two phase commit transaction so the Saga pattern will help."),Object(i.b)("p",null,"SAGA pattern supports two types of implementation: Choreography and Orchestration."),Object(i.b)("h2",null,"Services choreography"),Object(i.b)("p",null,"With Choreography each service produces and listens to other service’s events and decides if an action should be taken or not."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1010px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACpUlEQVQoz11TW08TQRTunzFegg8ajTFqfDD+BN99QJRE1BA1GhOjLz4Roy+AlxgVYgShkdCrvVihlpsB5FraQsvSli4t1IV2d2dndz9nphTEk3zJnjNnvnO+b7KOkqLCNboKz/gaPoWXkcz+wdiijMGRVfQPpzGzXEJ4KgdnNIMvQyvIFncwm97EQGxV1HgvD9u2BRz8wqUHQVx+9B0NN9zoY5cevpvEhXtBnLjpQcfgAq69iOHMnW84dcuL6GweL78u4PRtP062+PC0e1oQmtYu4XxmExfvc8KIIPGMSXj8cRrn7oYYAugKJtHSPs7OQqwvhIm4jA7XEs62BnGe1Z73zwtCq044my7hyrMhMfFokwvO4RW0vprAseseHG4cRKdrEVfbomho9uJ4sxs/5/Jo65vDoUYXjjS58aRr6r8NCwSd0RLe+xNoH5hBPLOF4K8sOt2LeOtbwu9UCcHJHD4E4ugOJVHYqmI8voE3njheexYQm6t5aNU9nE9J+DGVAlEVbi32g3+bOBAm4e4fKFFNA6V072Ecfp8X+awEeWMDBQY+iVILOxUdynaFSbFATQs6JSxXUK2oIIRC0w3oDJpGBFE9HOvrBRDDgCzLSCaTzFwLlmnDME3orK7qOqqajopWhcmIqWGJJXkfzzkZfxCeiw05KyEEqqZie0epNbINhRwmhQ9LplaQljKQC0Xk12QUiyVUVbV2TgwBnXHobLiDExSLRWRzWSZTEVOoYQoISVUCn9eH3t5eOJ1OOPud6PncA0mSdq3el2sYlG9o//MM1p65vMy90nWCWGwEgUAQkUgE4XAYPr8P+Xxe9GZzOYyMjiKRSIitHfVfxrKZVMuAaVMByzaZjwQaUZmXGpNUA8+5RXwbSk0oioIC879cLsNgFvwFDUlUNT1A8oIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/d2239035da59749331f5e53fdf40e7bb/96101/saga-choreo.png",srcSet:["/refarch-eda/static/d2239035da59749331f5e53fdf40e7bb/7fc1e/saga-choreo.png 288w","/refarch-eda/static/d2239035da59749331f5e53fdf40e7bb/a5df1/saga-choreo.png 576w","/refarch-eda/static/d2239035da59749331f5e53fdf40e7bb/96101/saga-choreo.png 1010w"],sizes:"(max-width: 1010px) 100vw, 1010px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The first service executes a transaction to its own data store and then publishes an event ( OrderCreated event (1)) as fact about its business entity update. It maintains the business entity status, (order.status) to the ",Object(i.b)("inlineCode",{parentName:"p"},"Pending")," state until the saga is completed. This event is listened by one or more services which execute local transactions and publish new events (VoyageAllocated (3), ReeferAssigned (4), PaymentProcessed (5)).\nThe distributed transaction ends when the last service executes its local transaction or when a service does not publish any events or the event published is not polled by any of the saga’s participants. For example, the Order microservice gets all the events from the other service and changed the Order state to be ",Object(i.b)("inlineCode",{parentName:"p"},"Accepted"),"."),Object(i.b)("p",null,"In case of failure, the source microservice is keeping state and timer to monitor for the expected completion events."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"974px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACmUlEQVQoz12R7U/TUBTG99+oCfpFExLUYDB+wA/+FyrRRCMEBRESNBGNX4x+0ZigJJJhNI7wupW1QNAosg0YEGAvDAplbN3symBbu7aP594FeTnJ6bm39/Z3nvPUlS8YGAtuQQwp6P+5jsimhlVZw8i0DO/MJkIRFeF4BgO/NjD4ewOhqAp9z+Dn4qzC77A9C8dx4Eokc7jeMY4bnZOoahhBt3cV74aWUfvQj8vNfrR9CuHV1zBqGgVcbBrDs945RLY0XGryob5jErXNAmJKjgNtm4AbOzquPZZQ1yrhwn0B7vE43g+v4Pw9H2qa/HjuDuP19yVUPxBoP4YXXxYQJ0BNow9XW8dR3y4hkdw9AkzqqGsRceWRiNM3h/DRF8Gb/iWcujWMs3e8XGFX3zzO3B7BubtedH6e5wqrGoZR3egn1ScUytkCXg5E8dav4ElfBFPhbUjkTUt3AG09IXh+rEMIbNKos2jvmYFnKoFkdg8ddPa0N4gu9zzUXLECZB4qORPfQjsYXC0gonNrcRCWWcTRmJhdx4fBhSNvbDhlE+Vy+fCnsIUgTiCp/sX+fhGGYVZgJD+T0WBZNqXDG83FFILKcGwLhlmGSaC9fAGlUukQaNs2goEAdvXcMTUWvS9R9wJdLhoG9kusWYEZBZNgTBWrrCEb1bKsCpA9HG6ojbX4GmKxGD+oQC1SYSKdyULeVrCbz5MiBjYIZnKFBlW255XSdfAxq9lsFumUCpu6OjSySeM7NrC4sIjR0VGIfpFSgiAICAaDOBklArsOYP+DllaZxiDfjJJJFfgzPQO32w2Px8OTrSVJ4tfZRIlEApqmccXHFFbGP4QzG9gYOV1HKp1GOq1CVVXspFJ8GuZbNBrF8vIKZFnmvv4Dj7dOrkHAgokAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"3",title:"3",src:"/refarch-eda/static/f816390a3dec9ba2ce7ee15db9611f84/3df5d/saga-choreo-fail.png",srcSet:["/refarch-eda/static/f816390a3dec9ba2ce7ee15db9611f84/7fc1e/saga-choreo-fail.png 288w","/refarch-eda/static/f816390a3dec9ba2ce7ee15db9611f84/a5df1/saga-choreo-fail.png 576w","/refarch-eda/static/f816390a3dec9ba2ce7ee15db9611f84/3df5d/saga-choreo-fail.png 974w"],sizes:"(max-width: 974px) 100vw, 974px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"When a message from any service is missing, the source service, needs to trigger a compensation process:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"984px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACp0lEQVQoz1WS2U8TURTG+x+5RIwaH+TB6IPGFxMTo0ZjMFGjoJhAgqiRGHGJSyKaGCORWOsDYZG40AIdyqYVBIlIS1tK18wMlOkM7Wx3pp93bi2kZ+Zkcs4993e+c++4pA0dkbSEWCaPvys5yAUdSUFBlMah5DpEqYhoOo8/8Rzml9egFA2WW0pJCNP1lKjAsVKpxNz1JZjE0TscTrRPoLZpCP7ZNG68nsbxe2M42OJHlzeM+ldBHLsbwKGbfkyHBbz5GsaR2xwOt3JofTfLgLb9HzgwlURNwyBqm/040DSM0d8Z1D3/jj3XfNh73YcPwxGcezKJfY1D2N3gxcySiI5Pi9hVP8jiW11z1cD+iRVsv/QZ+xt9FOJlCs9TQE2DDzuveqnCEM48Gmfxtsvf8DMk4EX/AnZcGWTe/PZXNXA8lEOLJ4S2nhgudgQRXFrD/b4oTrb7cfbxOAaCGbR1h1D3NIALzyaxkJDgnsji1AMOpx+O4SVVy4CVM5zLauiel/D+RwZxscgWMwpBQVeck4ZmAfyGAduiayX2IiMTGKZTa6NiDswxV35DhX9qFqJiQFZUlLcAhBYTw3JmYSliEeiaSUOLNbLo1zQJSnap+pYVRUZ/Xw/rVrK3uhk2oRC6iZRdM1So9JfSNYOBCHWL2JvKKuaqJJyiaDSGXC5XhtJHMw0UdQ0CzeVVGYZqQS+S8gS0mWGa0HUDulF2y7K3gDYdbSWegLQulWOLqtRNaKqOUS6AEf8IAtwYc44bBc/zVcocikGhm8DV1VXEYstIJdMILYap0nU6loViQUVvby/cbjc8Hz3weDzo7OxEPB5nIiKRCARBgKqqIIRUK3QO3PladBwnb9ICk5gQRZEp4ulGnheQzWYZoFAoYHpmBolEArIs04uy8Q/0/VG6nRZTyAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"4",title:"4",src:"/refarch-eda/static/1c4248443be55952ef1942206ea1e2ff/2200d/saga-compensation.png",srcSet:["/refarch-eda/static/1c4248443be55952ef1942206ea1e2ff/7fc1e/saga-compensation.png 288w","/refarch-eda/static/1c4248443be55952ef1942206ea1e2ff/a5df1/saga-compensation.png 576w","/refarch-eda/static/1c4248443be55952ef1942206ea1e2ff/2200d/saga-compensation.png 984w"],sizes:"(max-width: 984px) 100vw, 984px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Rolling back a distributed transaction does not come for free. Normally you have to implement another operation/transaction to compensate for what has been done before. This will be a new event sent by the service responsible of the transaction integrity. In the order example, in the rare case where one of the service is not able to provide a positive response, no voyage found, or no Reefer container found, then the order needs to change to ‘Uncompleted’ status, and an event to the orders topic will claim the orderID is now uncompleted (OrderUncompleted event Step 1 above) . Any service that has something allocated for this orderId will ‘unroll’ their changes in their own data source  (Steps 2,3,4 below)."),Object(i.b)("p",null,"Also it is important to note, that if one of the service is taking time to answer this may not be a problem as the order is in pending state. If the business requirement stipulates to address an order within a small time period then the compensation process may start. Uncompleted orders can be reviewed by a business user for manual handling. Email can be automatically sent to the customer about issue related to his order. There are a lot of different ways to handle order issue at the business level."),Object(i.b)("h2",null,"Services orchestration"),Object(i.b)("p",null,"With orchestration, one service is responsible to drive each participant on what to do and when."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAACFklEQVQoz32SS09TURSF+0/8BcahYUyicWpCYuLAqSEmGkciTIwao2FgQowmxiAqOigOSktr2wsUS9UEUksLAq220FKh9HVbae+j59yP0xYdqftkZY32OmvvtV0dIbE6krbZodK0KekWLVNg2zZtw8Q0LY4Mg7Zl0q2PqRJPfRmW1w95F9nhRfAHW4UG04s7eD7v4ZrwbHPxbpSh+zEeu+NMzKwypeWo1HS0+QXm/AG+Z7PYUig5wcjLr5y64mV85hvnbi8qRPB8KnD6aoBLD2K4xqbWODMcYHAkwuv5LFqyQjBZZ++gTDAUZtbrI5fb4Xc9cm8wcCPEc3+GoXtRLj+MEY7/ZPDWPNeerOC68ybF2eshzo9GePtFJ5yWfEg1yRb2mfP5CIfDWMLG6FjKn6DRalOqNjgyDcqNJhX9F5YtyJdqVPWWEpxWgurHC2MR3KtNonmUYIP9wxrJZIpEIoVeb2K0LSy1544lkLZEqt07wgHZdy6F6LFrdDKh5vczcFNjcrlGMO0wG6+TLx6wtLSErhyo3l5AhgrIMO0em5biE5gqwJZpIqWD69VCjuFnccbdKd7HCnhX9olulCkdltE0jeTaOuntDNV6refA+c/rOczrgpWifbJyB3Fi/aBUxh8IEAqF8Hq97O7m+6NJSa/3L3Ac5bBrUyh02XH+hImhbq8r2lEf7BWLbG5uqZvs32K38V84BgjOfkTtcHjwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"5",title:"5",src:"/refarch-eda/static/69355ff98e61e1225f907e139e86142d/3cbba/saga-ochestration.png",srcSet:["/refarch-eda/static/69355ff98e61e1225f907e139e86142d/7fc1e/saga-ochestration.png 288w","/refarch-eda/static/69355ff98e61e1225f907e139e86142d/a5df1/saga-ochestration.png 576w","/refarch-eda/static/69355ff98e61e1225f907e139e86142d/3cbba/saga-ochestration.png 1152w","/refarch-eda/static/69355ff98e61e1225f907e139e86142d/e129e/saga-ochestration.png 1158w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"It uses the different topics to control the saga by issuing event commands to the different service. It uses the event backbone as a queue processing to support the asynchronous invocations. In this case the event should be exactly once delivered and idempotent. Each participant produces response in their context and to the order topic. The orchestration layer needs to keep a state machine and acts once all the expected responses are received."),Object(i.b)("p",null,"If anything fails, the orchestrator is also responsible for coordinating the compensation process by sending rollback events with orderID and their respective impacted entity key (voyageID, reeferID, transactionID). Each  participant will undo its previous operations.\nOrchestrator is a State Machine where each transformation corresponds to a command or message."),Object(i.b)("p",null,"See also ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://microservices.io/patterns/data/saga.html"}),"this article")," from Chris Richardson on the Saga pattern."),Object(i.b)("p",null,"We have implemented the choreography saga pattern in the order management, voyage and refeer management microservices within the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/implementation/saga-patterns/"}),"EDA reference implementation solution")," with a detailed explanation of the integration tests to validate the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/integration-tests/happy-path/"}),"happy path"),", and the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/integration-tests/saga-pattern/"}),"exception path")," with compensation."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-patterns-saga-index-mdx-8d2a849de5e2ac514791.js.map