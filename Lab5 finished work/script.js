"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      

      Project to create a table of headings from an article
      Author: Jaelin Anderson 
      Date:  2/18/24 

      
*/


const sourceDoc = document.getElementById("source_doc");
const toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";


for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {

   if (n.nodeName === heading) {

      const anchor = document.createElement("a");
      anchor.name = "doclink" + headingCount;
      n.insertBefore(anchor, n.firstChild);

      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = n.textContent;
      listItem.appendChild(link);

      listItem.href = "#doclink" + headingCount;

      toc.appendChild(listItem);

      headingCount++;
   }
}