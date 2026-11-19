const DEFAULT_STAGE_TEXT = "Hover over an image below to display here.";

function setStageState(imageDiv, { text, bgUrl, active }) {
  imageDiv.style.backgroundImage = bgUrl;

  if (active) {
    imageDiv.classList.add("has-image");
  } else {
    imageDiv.classList.remove("has-image");
  }

  const labelEl = imageDiv.querySelector(".stage-label");
  if (labelEl) {
    labelEl.textContent = text;
  } else {
    imageDiv.textContent = text;
  }
}

function upDate(previewPic) {
  console.log("upDate event triggered");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  const imageDiv = document.getElementById("image");
  if (!imageDiv) return;

  setStageState(imageDiv, {
    text: previewPic.alt,
    bgUrl: `url("${previewPic.src}")`,
    active: true
  });
}

function undo() {
  console.log("undo event triggered");

  const imageDiv = document.getElementById("image");
  if (!imageDiv) return;

  setStageState(imageDiv, {
    text: DEFAULT_STAGE_TEXT,
    bgUrl: "url('')",
    active: false
  });
}

function addTabFocus() {
  console.log("addTabFocus triggered on page load");

  const previewImages = document.querySelectorAll(".preview");
  for (let i = 0; i < previewImages.length; i++) {
    previewImages[i].setAttribute("tabindex", "0");
    console.log(`Set tabindex="0" on preview #${i + 1}:`, previewImages[i].alt);
  }
}