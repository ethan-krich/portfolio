console.log(
  "If you really want to see this, you can find it on my github. https://github.com/ethan-krich/portfolio#. Give it a star while you are there:)"
);

const loadMD = async () => {
  const about = document.getElementById("#about");
  const aboutContentRaw = await fetch("/about.md");
  const aboutContent = await aboutContentRaw.text();

  about.innerHTML = markdown.default(aboutContent);
};

loadMD();
