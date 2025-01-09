// DESCRIPTION image control
const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
  inputUpload.click();
});

function readContentFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve({ url: reader.result, name: file.name });
    };

    reader.onerror = () => {
      reject(`Error while reading file ${file.name}`);
    };

    reader.readAsDataURL(file);
  });
}

const mainImage = document.querySelector(".main-image");
const nameImage = document.querySelector(".image-name");

inputUpload.addEventListener("change", async (Event) => {
  const file = Event.target.files[0];

  if (file) {
    try {
      const contentFile = await readContentFile(file);
      mainImage.src = contentFile.url;
      nameImage.textContent = contentFile.name;
    } catch (error) {
      console.error("Error while reading file");
    }
  }
});

const removeImage = document.querySelector(".remove-image");

removeImage.addEventListener("click", (Event) => {
  Event.preventDefault();
  mainImage.src = "./assets/imagem1.png";
  nameImage.textContent = "imagem_do_projeto.png";
});

// TAGS
const tagsInput = document.getElementById("category");
const tagsList = document.getElementById("tags-list");

tagsList.addEventListener("click", (Event) => {
  if (Event.target.classList.contains("remove-tag")) {
    const tagToRemove = Event.target.parentElement;
    tagsList.removeChild(tagToRemove);
  }
});

const availableTags = [
  "Front-end",
  "Programming",
  "Data Science",
  "Full-stack",
  "HTML",
  "CSS",
  "JavaScript",
];

async function verifyAvailableTags(tagText) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(availableTags.includes(tagText));
    }, 500);
  });
}

tagsInput.addEventListener("keypress", async (Event) => {
  if (Event.key === "Enter") {
    Event.preventDefault();
    const tagText = tagsInput.value.trim();
    if (tagText !== "") {
      try {
        const tagExists = await verifyAvailableTags(tagText);
        if (tagExists) {
          const newTag = document.createElement("li");
          newTag.innerHTML = `<p>${tagText}</p> <img src="./assets/close-black.svg" class="remove-tag">`;
          tagsList.appendChild(newTag);
          tagsInput.value = "";
        } else {
          alert("Tag not found.");
        }
      } catch (error) {
        console.error("Error while verifying if tag exists");
        alert("Error while verifying if tag exists. Verify console.");
      }
    }
  }
});

// Publish
async function publishProject(
  projectName,
  projectDescription,
  projectTags,
  projectImageURL
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finish = Math.random() > 0.5;
      if (finish) {
        console.log(
          projectName,
          projectDescription,
          projectTags,
          projectImageURL
        );
        resolve("Success!!");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
}

const publishButton = document.querySelector(".button-publish");
publishButton.addEventListener("click", async (Event) => {
  Event.preventDefault();

  const projectName = document.getElementById("name").value;
  const projectDescription = document.getElementById("description").value;
  const projectTags = Array.from(tagsList.querySelectorAll("p")).map(
    (tag) => tag.textContent
  );
  const projectImageURL = mainImage.src;

  try {
      const result = await publishProject(
      projectName,
      projectDescription,
      projectTags,
      projectImageURL
    );
    alert(result);
  } catch (error) {
    console.error("Something went wrong:", error);
    alert(error);
  }
});

const discardButton = document.querySelector(".button-discard");

discardButton.addEventListener("click", (Event) => {
    Event.preventDefault();

    const form = document.querySelector("form");
    form.reset();
    removeImage.click();
    tagsList.innerHTML = "";
})