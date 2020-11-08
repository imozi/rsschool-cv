const skillsList = document.querySelectorAll(".skills__hard-list li");
const rateTemplate = document.querySelector("#rate").content.querySelector(".rate");

const rate = [4,4,4,3,3,3,2,2,2,4,4,2,4];

const rateGenerator = (num) => {
  const rateNode = rateTemplate.cloneNode(true);
  const rateItems = rateNode.querySelectorAll(".rate__level");

  for (let i = 0; i < num; i++) {
    rateItems[i].classList.add("rate__lavel--checked");
  }

  return rateNode;
}

const rateInsert = () => {
  rate.forEach((num, i) => {
    const rate = rateGenerator(num);
    skillsList[i].prepend(rate);
  })
};

rateInsert();
