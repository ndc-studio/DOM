/**
* --- PARTIE 1 ---
*/

/** @description - Cible la balise ol */
const ol = document.querySelector("ol");

/** @description - Cible le dernier enfant de la liste ol */
const lastElementOl = ol.lastElementChild;

/** @description - Place le dernier enfant de la balise ol au debut de la liste */
ol.prepend(lastElementOl);

/**
 * --- PARTIE 2 ---
 */

/** @description - Cible toutes les sections */
const section = document.querySelectorAll("section");

/** @description - Cible le titre <h2> de la <section> 2 */
const h2Sect2 = section[1].querySelector("h2");

/** @description - Cible le titre <h2> de la <section> 3 */
const h2Sect3 = section[2].querySelector("h2");

/** @description - Place le titre <h2> de la <section> 3 -> dans la <section> 2 */
section[1].appendChild(h2Sect3);

/** @description - Place le titre <h2> de la <section> 2 -> dans la <section> 3 */
section[2].appendChild(h2Sect2);

/** 
* --- PARTIE 3 ---
*/

/** @description - Cilble le main*/
const main = document.querySelector("main");

/** @description - Cible la derniere section */
const lastSection = main.lastElementChild;

/** @description - Supprime le dernier element de main (<section> 3) */
lastSection.remove();


