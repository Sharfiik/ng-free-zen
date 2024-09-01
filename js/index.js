import { data } from "./data.js";
import { Download } from "./widgets/Download/Download.js";
import { Warranty } from "./widgets/warranty/Warranty.js";

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
