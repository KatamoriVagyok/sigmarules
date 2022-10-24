let state = {
  x: undefined,
  y: undefined,
  isDragged: false,
};

const container = document.getElementById("drag-and-drop-app");
state.x = container.offsetLeft;
state.y = container.offsetTop;

function render()
{
    const doboz = `
    <div
      style="width: 200px; position: absolute; left: ${state.x}px; top: ${state.y}px;"
      class="box ${state.isDragged ? "grabbed" : "not-grabbed"}"
      onmousedown="dobozDragStart()"
      onmouseup="dobozDragEnd()"
      onmousemove="dobozMouseMove(window.event)"
    >
    <div class="box" style="width: 200px; position: absolute;">
      <div class="card-body">
        <h5 class="card-title display-4"># húzd arrébb</h5>
      </div>
    </div>
  `;

  document.getElementById("drag-and-drop-app").innerHTML = doboz;
}
// 3. A doboz mousedown eseményre reagálva módosítsd a state isDragged értékét true-ra
function dobozDragStart() {
  state.isDragged = true;
  render();
}

// 4. A doboz mouseup eseményre reagálva módosítsd a state isDragged értékét false-ra
function dobozDragEnd() {
  state.isDragged = false;
  render();
}
function dobozMouseMove(event) {
    if(state.isDragged)
    {
        const box = event.target.closest(".box");
    if (!box) {
      return;
    }
    state.x = document.documentElement.scrollLeft + event.clientX - box.offsetWidth / 2;
    state.y = document.documentElement.scrollTop + event.clientY - box.offsetHeight / 2;
        render();
    }
}