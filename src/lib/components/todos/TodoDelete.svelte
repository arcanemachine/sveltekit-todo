<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import { toastCreate, toastCreateOnError } from "$helpers";
  import type { Todo, TodosDestroyRequest } from "$lib/openapi";
  import { apiStore, todos } from "$stores";
  import { todoFormInputText, todoIdSelected } from "$stores/todos";

  export let modalVisible: boolean; // props
  $: todosApi = $apiStore.apis.todos; // computed

  // methods
  function handleKeydown(evt: KeyboardEvent) {
    if (!modalVisible) return;

    if (evt.key === "Escape") {
      modalClose();
    } else if (evt.key === "Enter") {
      todoDelete();
    }
  }

  onMount(() => {
    document.body.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    document.body.removeEventListener("keydown", handleKeydown);
  });

  function todoDelete() {
    const params: TodosDestroyRequest = {
      id: $todoIdSelected,
    };

    todosApi
      .todosDestroyRaw(params, $apiStore.overrides)
      .then((res) => {
        if (res.raw.ok && res.raw.status === 204) {
          // delete locally
          $todos = $todos.filter((todo: Todo) => todo.id !== $todoIdSelected);

          $todoFormInputText = ""; // reset form input text
          $todoIdSelected = 0; // reset selected item
          toastCreate("Todo deleted successfully", "success"); // success message
          modalClose();
        } else {
          toastCreate(`Error ${res.raw.status}: ${res.raw.statusText}`, "error"); // error message
        }
      })
      .catch((err) => {
        toastCreateOnError(err);
      });
  }

  function modalClose() {
    modalVisible = false;
  }
</script>

<input type="checkbox" id="todo-delete-modal" class="modal-toggle" bind:checked={modalVisible} />

{#if modalVisible}
  <div class="modal">
    <div class="modal-box relative max-w-xs rounded-tr-none">
      <label for="todo-delete-modal" class="modal-button-close btn-square">✕</label>

      <h2 class="mt-2 text-center font-bold">Delete this Todo?</h2>

      <div class="form-control mt-6 w-full max-w-xs">
        <button class="btn-error btn" on:click={todoDelete}>Yes</button>
      </div>

      <div class="form-control mt-4 w-full max-w-xs">
        <button class="btn-secondary btn" on:click={modalClose}>No</button>
      </div>
    </div>
  </div>
{/if}