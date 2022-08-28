const addPostForm = document.querySelector('.add-post-form');
const titleValue = document.getElementById('title-value');
const bodyValue = document.getElementById('body-value');
const labelSubject = document.querySelector('#label-subject');
const labelMessage = document.querySelector('#label-message');
const btnSubmit = document.querySelector('.btn');
const postsList = document.querySelector('.posts-list');

let output = '';

// Get date
function getTime() {
  let today = new Date();
  let day = today.getDate() + '';
  let month = today.getMonth() + 1 + '';
  let year = today.getFullYear() + '';
  let hour = today.getHours() + '';
  let minutes = today.getMinutes() + '';
  let seconds = today.getSeconds() + '';

  function checkZero(data) {
    if (data.length == 1) {
      data = '0' + data;
    }
    return data;
  }

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  let date =
    day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
  return date;
}

// Validate inputs
titleValue.addEventListener('keyup', validateSubject);
function validateSubject() {
  if (!titleValue.value.trim()) {
    labelSubject.classList.add('text-danger');
  } else {
    labelSubject.classList.add('text-dark');
  }
}

bodyValue.addEventListener('keyup', validateMessage);
function validateMessage() {
  if (!bodyValue.value.trim()) {
    labelMessage.classList.add('text-danger');
  } else {
    labelMessage.classList.add('text-dark');
  }
}
// Render posts function
const renderPosts = (posts) => {
  posts.forEach((post) => {
    if (!post.updatedOn) {
      output += `
      <div class="card mt-3 mb-3 col-12 bg-light">
        <div class="card-body" data-id=${post.id}>
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-3 text-muted">Posted on: ${post.postedOn}</h6>
          <p class="card-text">${post.body}</p>
          <a href="#" class="card-link btn btn-outline-success" id="edit-post">Edit</a>
          <a href="#" class="card-link btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="delete-post">Delete</a>
        </div>
      </div>
      `;
    } else {
      output += `
      <div class="card mt-3 mb-3 col-12 bg-light">
        <div class="card-body" data-id=${post.id}>
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-3 text-muted">Posted on: ${post.postedOn}</h6>
          <p class="card-text">${post.body}</p>
          <h6 class="card-subtitle mb-3 text-muted">Updated on: ${post.updatedOn}</h6>
          <a href="#" class="card-link btn btn-outline-success" id="edit-post">Edit</a>
          <a href="#" class="card-link btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="delete-post">Delete</a>
        </div>
      </div>
      `;
    }
  });
  postsList.innerHTML = output;
};

const url = 'http://localhost:3005/posts';

// Get - Read the posts
// Method: GET
fetch(url)
  .then((res) => res.json())
  .then((data) => renderPosts(data));

// Create - Insert new post
// Method: POST
addPostForm.addEventListener('submit', () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: titleValue.value,
      body: bodyValue.value,
      postedOn: getTime(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      renderPosts(dataArr);
    }, location.reload());

  titleValue.value = '';
  bodyValue.value = '';
});

//Update and delete
postsList.addEventListener('click', (e) => {
  let editButtonIsPressed = e.target.id == 'edit-post';
  // let delButtonIsPressed = e.target.id == 'delete-post';

  let id = e.target.parentElement.dataset.id;

  // Update - Update the existing post
  // Method: PATCH
  if (editButtonIsPressed) {
    const parent = e.target.parentElement;
    let titleContent = parent.querySelector('.card-title').textContent;
    let bodyContent = parent.querySelector('.card-text').textContent;

    titleValue.value = titleContent;
    bodyValue.value = bodyContent;

    btnSubmit.innerText = 'Update Post';
    btnSubmit.classList.add('btn-success');

    let cancelUpdate = document.querySelector('.btn-danger');
    cancelUpdate.style.display = 'inline';

    cancelUpdate.addEventListener('click', handleCancelUpdate);
    function handleCancelUpdate(e) {
      e.preventDefault();
      location.reload();
    }

    window.scrollTo(0, 0);
  }

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: titleValue.value,
        body: bodyValue.value,
        updatedOn: getTime(),
      }),
    })
      .then((res) => res.json())
      .then(() => location.reload());
  });

  // Delete - Remove the existing post
  // Method: DELETE
  // if (delButtonIsPressed) {
  //   fetch(`${url}/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       if (confirm('Are you sure you want to delete this post?')) {
  //         location.reload();
  //       }
  //     });
  // }

  let modalDialog = document.querySelector('.modal-dialog');
  modalDialog.addEventListener('click', (e) => {
    let deleteisPressed = e.target.id == 'delete';

    if (deleteisPressed) {
      fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => location.reload());
    }
  });
});
