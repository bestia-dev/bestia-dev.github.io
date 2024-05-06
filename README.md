[//]: # (auto_md_to_doc_comments segment start A)

# bestia-dev.github.io

**Learning Rust and Wasm programming and having fun. I just love programming!**  
***version 1.0 date: 2024-05-06  author: [bestia.dev](https://bestia.dev) repository: [GitHub](https://github.com/bestia-dev/bestia-dev.github.io)***  

 ![tutorial](https://img.shields.io/badge/tutorial-yellow)
 ![bestia-dev.github.io](https://bestia.dev/webpage_hit_counter/get_svg_image/1058713884.svg)

Hashtags: #rustlang #tutorial  
My projects on GitHub are more like a tutorial than a finished product: [bestia-dev tutorials](https://github.com/bestia-dev/tutorials_rust_wasm).

Visit my web page: [bestia.dev](https://bestia.dev)

## youtube video tutorial

In my video tutorial series "bestia-dev Tutorials for Rust programming language" I explain how I use my development environment. You can see steps and processes that are not explained in README files.

<!-- markdownlint-disable MD033 -->
[<img src="https://bestia.dev/images/youtube_banner.jpg" width="600px">](https://www.youtube.com/channel/UCitt3zFHK2jDetDh6ezI05A)
<!-- markdownlint-enable MD033 -->

## rust lang

[Rust](https://www.rust-lang.org/) is a fantastic "new" language that has many benefits, but a steep learning curve.
Probably the knowledge of other languages and prior coding experience makes it even harder to learn. Our mind has already formed many patterns that are not "correct" for rust. It is difficult to lose an old habit.  
I hope that new programmers will learn it as their first programming language. It can be much easier to understand and form correct patterns in the brain.  
I am learning the language myself and I like to teach others, so I made my projects on Github more like a tutorial than a finished product.  

## wasm/webassembly

A web page is the only true cross-platform application. It works on virtually any device or OS: windows, macOS, linux, android, iOS,...
Every modern internet browser comes with a programmable engine. Sadly the only programming language of all browsers is javascript. Everybody knows it is a terrible language.  
But we are lucky that all browsers lately accepted the idea of [wasm/webassembly](https://www.rust-lang.org/what/wasm). This enables different languages to be compiled into a very efficient `assembly code` that works great inside the browser. Basically eliminates the need for javascript. The best language for wasm/webassembly is Rust.

## html5 + css for GUI

The worst part of cross-platform programming is the GUI (graphical user interface). It is a mess where every OS invented something different and incompatible. Some OS have even invented more than one GUI for themselves. It is interesting that in the end, all these GUIs look fairly similar.  
The only true cross-platform GUI is [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)+[CSS](https://www.w3schools.com/html/html_css.asp). It works in every browser on every platform. Just use it. It is sometimes more complicated and slower, but it works everywhere.  

## PWA

Having a web app made in html+css+rust-wasm sounds great. But it looks awful with all these browser toolbars and statusbar and it feels like a web page. It does not feel like a native app.  
Enter [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) (progressive web applications)!  
It allows the web app to be "installed" on your device and it feels like a native app. It has an app icon, it has some local storage, it works with or without a server connection, it updates automatically, and it does not have access to the local machine in a way to be potentially harmful. It works on all desktop and mobile OS. What is not to be liked?  

## web servers

Every local app deserves to have a web server somewhere to be truly usable.
Complex apps could download and upload data to the server.  
But even the most simple PWA needs a web server to be run the first time and then maybe installed locally. The same web server is later used to update the PWA. This is the server of the original app author and not of some mirror or web store that could theoretically inject some adware/malware or tax all purchases. The web servers for PWA must use a secure HTTPS connection to avoid man-in-the-middle attacks. The TLS certificate also says a lot about the identity of the server owner. It feels a bit less frightening on this wild and dangerous internet.  
Web servers are also needed for temporary caching of communication and to list users that are connected right now. I am talking about [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) and [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) technologies for communication over web standards.  
Guess what? Rust is a great language for writing web servers, especially web servers for special needs, not just good old static web pages. Another name is maybe more appropriate here: web services or micro-services. But technologically it is the same thing, just more specialized.  

## databases

On the server side, I will use PostgreSQL in a container.
Inside the browser, there is the Indexeddb database.

## Open-source and free as a beer

My open-source projects are free as a beer (MIT license).  
I just love programming.  
But I need also to drink. If you find my projects and tutorials helpful, please buy me a beer by donating to my [PayPal](https://paypal.me/LucianoBestia).  
You know the price of a beer in your local bar ;-)  
So I can drink a free beer for your health :-)  
[Na zdravje!](https://translate.google.com/?hl=en&sl=sl&tl=en&text=Na%20zdravje&op=translate) [Alla salute!](https://dictionary.cambridge.org/dictionary/italian-english/alla-salute) [Prost!](https://dictionary.cambridge.org/dictionary/german-english/prost) [Nazdravlje!](https://matadornetwork.com/nights/how-to-say-cheers-in-50-languages/) 🍻

[//bestia.dev](https://bestia.dev)  
[//github.com/bestia-dev](https://github.com/bestia-dev)  
[//bestiadev.substack.com](https://bestiadev.substack.com)  
[//youtube.com/@bestia-dev-tutorials](https://youtube.com/@bestia-dev-tutorials)  

[//]: # (auto_md_to_doc_comments segment end A)
