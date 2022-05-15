const add_farmajo = document.querySelector(".add_farmajo");
const sub_farmajo = document.querySelector(".sub_farmajo");
const vote_farmajo = document.querySelector(".vote_farmajo");

let count = 0;

add_farmajo.addEventListener("click", () => {
  count = count + 1;
  vote_farmajo.textContent = count;
});

sub_farmajo.addEventListener("click", () => {
  count = count - 1;
  vote_farmajo.textContent = count;
});

const add_khayre = document.querySelector(".add_khayre");
const sub_khayre = document.querySelector(".sub_khayre");
const vote_khayre = document.querySelector(".vote_khayre");

add_khayre.addEventListener("click", () => {
  count = count + 1;
  vote_khayre.textContent = count;
});

sub_khayre.addEventListener("click", () => {
  count = count - 1;
  vote_khayre.textContent = count;
});

const add_deni = document.querySelector(".add_deni");
const sub_deni = document.querySelector(".sub_deni");
const vote_deni = document.querySelector(".vote_deni");

add_deni.addEventListener("click", () => {
  count = count + 1;
  vote_deni.textContent = count;
});

sub_deni.addEventListener("click", () => {
  count = count - 1;
  vote_deni.textContent = count;
});

const add_xasan = document.querySelector(".add_xasan");
const sub_xassan = document.querySelector(".sub_xasan");
const vote_xasan = document.querySelector(".vote_xasan");

add_xasan.addEventListener("click", () => {
  count = count + 1;
  vote_xasan.textContent = count;
});

sub_xassan.addEventListener("click", () => {
  count = count - 1;
  vote_xasan.textContent = count;
});
