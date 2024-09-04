import { data } from "./data.js";
import { Download } from "./widgets/Download/Download.js";
import { Warranty } from "./widgets/Warranty/Warranty.js";
import { Care } from "./widgets/Care/Care.js";
import { Cashback } from "./widgets/Cashback/Cashback.js";
import { Clients } from "./widgets/Сlients/Сlients.js";
import { Footer } from "./widgets/Footer/Footer.js";

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
$root?.insertAdjacentHTML('beforeend', Care(data.care));
$root?.insertAdjacentHTML('beforeend', Cashback(data.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(data.clients));
$root?.insertAdjacentHTML('beforeend', Footer(data.secondaryInfo));
