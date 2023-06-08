<template>
  <div class="info-card">
    <div data-v-83166250="" class="avatar">
      <t-avatar size="150px" image="https://www.531q.xyz/public/assets/img/frame4.png" />
    </div>
    <div data-v-83166250="" class="user-meta">
      <t-space class="meta">
        <h4>余额: $99810.01</h4>
        <t-button>
          <img
            data-v-83166250=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA1LTA3VDE1OjA4OjMzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTA3VDE1OjA4OjMzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNS0wN1QxNTowODozMyswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MDgwMjcwMi02MTNhLTA1NGItOGMzYS0zYzQ1YmU3YTE4NjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YTBhOTMyYy1mZjI0LTRhNDUtYTNjYy1iNTI0ZGMzMTE3ZmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTcyMGY1Yi1jNGVjLTkzNDItYWVkOC03YWEwOTgyYWJjNjEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYTcyMGY1Yi1jNGVjLTkzNDItYWVkOC03YWEwOTgyYWJjNjEiIHN0RXZ0OndoZW49IjIwMjMtMDUtMDdUMTU6MDg6MzMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTA4MDI3MDItNjEzYS0wNTRiLThjM2EtM2M0NWJlN2ExODYzIiBzdEV2dDp3aGVuPSIyMDIzLTA1LTA3VDE1OjA4OjMzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++4BYtQAAAXVJREFUOI2tlL1KA0EUhb9stPCnsAgSLYwQUBS0U9u8g519Cisba0GCsdb38BUkhRYabBQUAxq1MGrEiIoJ+HMsvAmbTTaZIhcuO3PunMPcmTkbkUQvw+upmqOgB7wCFZf1LoJbwBfwbeOOEelyhh7wAazZfAcYBn5DGZI65baksm9eNiyU00nMk/QpKe3D0oZ5Ybx6yzPAMjAPTAPjwAhQAiaAM2toDrgD4vxf1D1QAE6BPeCiLvhj5AJwDpwA+8CtCZXsO2bfBJACFoBZYMpq0fpW83Y+sZBWSpbtajHj5iU1ns0iUASurB3XiBvnxjRaLiUn6U1SMoDvWvqxpK3N+fHgw04BB8BxAI/SaoIj4NA4jWjnlHVgIIAlgMkANghkWtghBz3a5cEj6VrSZhAP8/JTYL5q6Y9LYMllhyuShnzOeJH0blnxOWdDUtHFelVJGUkPZrOspIhl1rBHG1ddBJ8l1eyZ9Lep91mtpuYfR5OXexZ/y4I2OkemhTQAAAAASUVORK5CYII="
            alt=""
          /><span>推广赚钱</span>
        </t-button></t-space
      >
      <t-space class="action">
        <t-button>充值</t-button>
        <t-button>记录</t-button>
        <t-button>退出</t-button>
      </t-space>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="less" scoped>
.info-card {
  width: 100%;
  background-color: var(--td-gray-color-13);
  color: var(--td-font-white-2);
  padding: 50px 0;
  margin-top: 100px;
  border-radius: 10px;
  display: flex;
  position: relative;
  .avatar {
    position: absolute;
    top: -80px;
    overflow: hidden;
    margin-left: 60px;
  }
  .user-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    .meta {
      flex: 3;
      text-align: center;
      align-items: center;
      justify-content: center;
      display: flex;
    }
    .action {
      flex: 1.25;
    }
  }
}
</style>
