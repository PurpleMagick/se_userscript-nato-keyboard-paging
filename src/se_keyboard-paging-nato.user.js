// ==UserScript==
// @name            NATO(Q) keyboard page navigation
// @description     Allow keyboard navigation between different pages (P->N for next / P->P for previous) in the New Answers to Old Questions tool 
// @namespace       https://github.com/PurpleMagick/
// @grant           none
// @inject-into     page
// @match           https://stackoverflow.com/tools/new-answers-old-questions*
// @match           https://serverfault.com/tools/new-answers-old-questions*
// @match           https://superuser.com/tools/new-answers-old-questions*
// @match           https://*.stackexchange.com/tools/new-answers-old-questions*
// @match           https://askubuntu.com/tools/new-answers-old-questions*
// @match           https://stackapps.com/tools/new-answers-old-questions*
// @match           https://mathoverflow.net/tools/new-answers-old-questions*
// @match           https://pt.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://ja.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://ru.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://es.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://meta.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://meta.serverfault.com/tools/new-answers-old-questions*
// @match           https://meta.superuser.com/tools/new-answers-old-questions*
// @match           https://meta.askubuntu.com/tools/new-answers-old-questions*
// @match           https://meta.mathoverflow.net/tools/new-answers-old-questions*
// @match           https://pt.meta.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://ja.meta.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://ru.meta.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://es.meta.stackoverflow.com/tools/new-answers-old-questions*
// @match           https://stackoverflowteams.com/c/tools/new-answers-old-questions*
// @version         1.0
// @author          VLAZ
// ==/UserScript==
(function() {
	const pager = document.querySelector(".pager");
	
	if (!pager) {
		console.warn("Could not find a pager on the NATO page. The fix for keyboard navigation is not active.")
		return;
	}
	
	pager.classList.add("pager-answers");
})();
