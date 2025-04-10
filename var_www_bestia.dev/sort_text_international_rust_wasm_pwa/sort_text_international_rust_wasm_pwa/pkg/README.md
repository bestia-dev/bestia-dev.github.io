<!-- markdownlint-disable MD041 -->
[//]: # (auto_md_to_doc_comments segment start A)

# 4. Tutorial for Coding simple PWA in Rust (sort_text_international_rust_wasm_pwa) (2022-07)

[//]: # (auto_cargo_toml_to_md start)

**Sort text in different collations. It is a tutorial for Rust WASM PWA.**  
***version: 2022.717.1738 date: 2022-07-17 author: [bestia.dev](https://bestia.dev) repository: [Github](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa)***  

[//]: # (auto_cargo_toml_to_md end)

[//]: # (auto_lines_of_code start)
[![Lines in Rust code](https://img.shields.io/badge/Lines_in_Rust-159-green.svg)](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/)
[![Lines in Doc comments](https://img.shields.io/badge/Lines_in_Doc_comments-101-blue.svg)](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/)
[![Lines in Comments](https://img.shields.io/badge/Lines_in_comments-23-purple.svg)](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/)
[![Lines in examples](https://img.shields.io/badge/Lines_in_examples-0-yellow.svg)](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/)
[![Lines in tests](https://img.shields.io/badge/Lines_in_tests-0-orange.svg)](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/)

[//]: # (auto_lines_of_code end)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/blob/master/LICENSE)
[![Rust](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/workflows/RustAction/badge.svg)](https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/)

Hashtags: #rustlang #tutorial #pwa #wasm #webassembly  
My projects on Github are more like a tutorial than a finished product: [bestia-dev tutorials](https://github.com/bestia-dev/tutorials_rust_wasm).

## Try it

<https://bestia.dev/sort_text_international_rust_wasm_pwa/>  

<!-- markdownlint-disable MD033 -->
[<img src="https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/raw/main/images/screen_1.png" width="300px">](https://bestia.dev/sort_text_international_rust_wasm_pwa/)
<!-- markdownlint-enable MD033 -->

## Development

My development environment is thoroughly explained in my previous projects with youtube video tutorial:  
[1. Linux everywhere! Install wsl2 and debian11 on win10 (win10_wsl2_debian11) (2022-03)](https://github.com/CRUSTDE-ContainerizedRustDevEnv/win10_wsl2_debian11)  
[2. Rust: Hack Without Fear ! Rust Development Environment in Docker Container. (crustde_cnt_img_pod) (2022-03)](https://github.com/CRUSTDE-ContainerizedRustDevEnv/crustde_cnt_img_pod)  
[3. Coding a Rust client CLI for plantuml server (rust_plantuml_client) (2022-04)](https://github.com/bestia-dev/rust_plantuml_client)  

This project has also a youtube video tutorial. Watch it:
<!-- markdownlint-disable MD033 -->
[<img src="https://github.com/bestia-dev/sort_text_international_rust_wasm_pwa/raw/main/images/screen_1.png" width="400px">](https://bestia.dev/youtube/sort_text_international_rust_wasm_pwa.html)
<!-- markdownlint-enable MD033 -->

Use `cargo-auto` to automate development tasks: `cargo install cargo-auto`.  
Then inside the Rust project folder run `cargo auto` for the instructions.  
PWA files MUST be served by a web server. We will use the most simple development web server:  
`cargo install basic-http-server`.  
Open a new terminal window in VSCode and go to the web server folder and run the server:  
`cd ~/rustprojects/sort_text_international_rust_wasm_pwa/web_server_folder; basic-http-server`  
Inside VSCode add the port 4000 for forwarding out of the docker container.  
Open the browser in Win10 on:  
<http://127.0.0.1:4000/sort_text_international_rust_wasm_pwa/>  

## Alphabetical sorting (collation)

I will use the javascript Intl Collator object to sort text for different languages.  
Rust does not have yet a stable collation library.  
Rust (wasm) and javascript can work very well together with web_sys and js_sys crates using wasm-bindgen.  

## Template

This project was made from the template of a simple Rust Wasm PWA.  
It is created with this PWA utility:  
<https://bestia.dev/bestia_dev_new_rust_wasm_pwa>

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
