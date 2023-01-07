<template>
    <ul class="pagination  mt-4" style="outline:none">
      <li class="page-item  bg-dark">
        <button
          type="button"
          class="page-link"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          First
        </button>
      </li>
  
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Previous
        </button>
      </li>
      <!-- Visible Buttons Start -->
      <li
        v-for="page in pages"
        :key="page.name"
        class="page-item"
        :class="{active:page.isDisabled}"
      >
        <button
          type="button"
          class="page-link"
          :disabled="page.isDisabled"
          @click="onClickPage(page.name)"
          :class="{ active: isPageActive(page.name)  }"
        >
          {{ page.name }}
        </button>
      </li>
      <!-- Visible Buttons End -->
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
          Next
        </button>
      </li>
  
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          @click="onClickLastPage"
          :disabled="isInLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
      },
      totalPages: {
        type: Number,
        required: true
      },
      perPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    computed: {
      startPage() {
        // When on the first page
        if (this.currentPage === 1) {
          return 1;
        }
  
        // When on the last page
        if (this.currentPage === this.totalPages) {
          return this.totalPages - this.maxVisibleButtons;
        }
  
        // When inbetween
        return this.currentPage - 1;
      },
      pages() {
        const range = [];
  
        for (
          let i = this.startPage;
          i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
          i++
        ) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage
          });
        }
  
        return range;
      },
      isInFirstPage() {
        return this.currentPage === 1;
      },
      isInLastPage() {
        return this.currentPage === this.totalPages;
      },
    },
    methods: {
      onClickFirstPage() {
        this.$emit('pageChanged', 1);
      },
      onClickPreviousPage() {
        this.$emit('pageChanged', this.currentPage - 1);
      },
      onClickPage(page) {
        this.$emit('pageChanged', page);
      },
      onClickNextPage() {
        this.$emit('pageChanged', this.currentPage + 1);
      },
      onClickLastPage() {
        this.$emit('pageChanged', 500);
      },
      isPageActive(page) {
        return this.currentPage === page;
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    outline: none;
    box-shadow: none;
  }
    .page-link {
      position: relative;
      display: block;
      padding: 0.5rem 0.75rem;
      margin-left: -1px;
      line-height: 1.25;
      color: rgb(133, 129, 129);
      background-color: rgb(0, 53, 62);
      border: 1px solid #479e9e;          /*#346767* /#D8EBEB 003C00      CEFFCE */
      outline: none;
      cursor: pointer;
      box-shadow: none;
  }
  
  .page-item.disabled .page-link {
      color: #868e96;
      pointer-events: none;
      cursor: auto;
      background-color: #CEFFCE;
      border-color: #718393;
      outline: none;
      box-shadow: none;
  }
  
  .page-item.active .page-link {
      z-index: 1;
      color: #fff;
      background-color: #17a2b8;
      border-color: #5ea1ff;
      outline: none;
      box-shadow: none;
  }
  
  .page-link:focus, .page-link:hover {
      color: #fff;
      text-decoration: none;
      /* background-color: #17a2b8; */
      border-color: #5ea1ff;
      outline: none;
      box-shadow: none;
  }
  
  @media (max-width: 456px) {
    .page-item button {
      font-size: 12px;
      padding: 8px;
    }
  }
  
  </style>
  