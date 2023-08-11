/* icons为预先准备好的图标100个
 size为每页显示的个数
 page是显示的总页数 向上取整(一个也会占一页)
 pagerCount为要显示的数字按钮的个数 */
const icons = [
    "pregnant_woman",
    "accessibility",
    "accessibility_new",
    "emoji_people",
    "sports_kabaddi",
    "sports_handball",
    "elderly",
    "accessible",
    "accessible_forward",
    "hotel",
    "sports_baseball",
    "sports_basketball",
    "sports_football",
    "sports_golf",
    "sports_hockey",
    "sports_motorsports",
    "sports_rugby",
    "sports_soccer",
    "sports_tennis",
    "sports_volleyball",
    "pedal_bike",
    "moped",
    "two_wheeler",
    "directions_car",
    "local_taxi",
    "local_shipping",
    "directions_bus",
    "directions_transit",
    "subway",
    "flight",
    "mouse",
    "keyboard",
    "headset",
    "desktop_mac",
    "sim_card",
    "phone_android",
    "phone_iphone",
    "watch",
    "videogame_asset",
    "scanner",
    "attach_email",
    "attachment",
    "cloud_circle",
    "cloud_download",
    "cloud_upload",
    "text_snippet",
    "request_quote",
    "folder",
    "topic",
    "folder_shared",
    "4k",
    "fiber_new",
    "fiber_dvr",
    "explicit",
    "closed_caption",
    "hd",
    "high_quality",
    "closed_caption_disabled",
    "score",
    "picture_as_pdf",
    "filter_1",
    "filter_2",
    "filter_3",
    "filter_4",
    "filter_5",
    "filter_6",
    "filter_7",
    "filter_8",
    "filter_9",
    "filter_9_plus",
    "looks_one",
    "looks_two",
    "looks_3",
    "looks_4",
    "looks_5",
    "exposure_neg_1",
    "exposure_neg_2",
    "exposure_zero",
    "exposure_plus_1",
    "exposure_plus_2",
    "camera_alt",
    "center_focus_strong",
    "camera",
    "camera_roll",
    "photo",
    "movie_creation",
    "motion_photos_on",
    "motion_photos_paused",
    "local_movies",
    "movie_filter",
    "arrow_forward",
    "arrow_back",
    "subdirectory_arrow_right",
    "subdirectory_arrow_left",
    "arrow_downward",
    "arrow_upward",
    "north_east",
    "north_west",
    "south_east",
    "south_west",
    "filter_1",
    "filter_2",
    "filter_3",
    "filter_4",
    "filter_5",
    "filter_6",
    "filter_7",
    "filter_8",
    "filter_9",
    "filter_9_plus",
    "looks_one",
    "looks_two",
    "looks_3",
    "looks_4",
    "looks_5",
    "exposure_neg_1",
    "exposure_neg_2",
    "exposure_zero",
    "exposure_plus_1",
    "exposure_plus_2",
    "camera_alt",
    "center_focus_strong",
    "camera",
    "camera_roll",
    "photo",
    "movie_creation",
    "motion_photos_on",
    "motion_photos_paused",
    "local_movies",
    "movie_filter",
    "arrow_forward",
    "arrow_back",
    "subdirectory_arrow_right",
    "subdirectory_arrow_left",
    "arrow_downward",
    "arrow_upward",
    "north_east",
    "north_west",
    "south_east",
    "south_west",
    "filter_1",
    "filter_2",
    "filter_3",
    "filter_4",
    "filter_5",
    "filter_6",
    "filter_7",
    "filter_8",
    "filter_9",
    "filter_9_plus",
    "looks_one",
    "looks_two",
    "looks_3",
    "looks_4",
    "looks_5",
    "exposure_neg_1",
    "exposure_neg_2",
    "exposure_zero",
    "exposure_plus_1",
    "exposure_plus_2",
    "camera_alt",
    "center_focus_strong",
    "camera",
    "camera_roll",
    "photo",
    "movie_creation",
    "motion_photos_on",
    "motion_photos_paused",
    "local_movies",
    "movie_filter",
    "arrow_forward",
    "arrow_back",
    "subdirectory_arrow_right",
    "subdirectory_arrow_left",
    "arrow_downward",
    "arrow_upward",
    "north_east",
    "north_west",
    "south_east",
    "south_west",
  ],
  size = 10,
  page = Math.ceil(icons.length / size),
  pagerCount = 4;

let current = 1;

const _content = document.querySelector(".content");
const showContent = () => {
  _content.innerHTML = "";
  icons.forEach((item, index) => {
    // 遍历计算方法 当前为第1页 一页10个 第一页的数据就是 0 - 10(不包含) 第二页为 10 - 20(不包含) 以此类推
    if (index >= (current - 1) * size && index < current * size) {
      // 每遍历一个创建一个li元素
      const li = document.createElement("li");
      // li元素添加内容
      li.innerHTML = `
			    <i class="material-icons">${item}</i>
					<p>${index + 1}</p>`;
      // 添加到列表元素中
      _content.appendChild(li);
    }
  });
};

// 创建分页列表
const _pagination = document.querySelector(".pagination");
const createPagination = () => {
  // 刚开始就要有左按钮
  // 当前页数不为1就为可点击态
  let lis = `
	<li class="material-icons page-btn page-btn-prev ${
    current !== 1 ? "isClick" : ""
  }">
	  keyboard_arrow_left
  </li>`;

  if (current < 1 || current > page) {
    throw `current 参数最小值为1 最大值为${page}`;
    // 当当前页数小于1或者大于总页数了就抛出错误
  } else if (pagerCount < 5) {
    throw "pagerCount 参数最小值为5";
    // 小于5 分页无意义
  } else if (page <= pagerCount) {
    // 如果总页数小于了要显示的数字按钮个数 就直接遍历了 不需要显示省略按钮
    for (let i = 1; i <= page; i++) {
      lis += `<li class="page-number ${
        i == current ? "active" : ""
      }">${i}</li>`;
    }
  } else {
    // 定义两个参数
    // 用来保存当前选中分页前后的显示数字按钮(不包括省略前后的和选中的) 刚好是以下计算方法
    // 有问题 pagerCount 为偶数 显示小数点 将beforeNumber向下取整就可以了
    let beforeNumber = Math.floor(current - (pagerCount - 3) / 2),
      afterNumber = current + (pagerCount - 3) / 2;
    // 显示左省略按钮
    if (current >= pagerCount - 1) {
      lis += `<li class="page-number">1</li>
        <li class="material-icons page-dot page-dot-prev"></li>`;
    }
    // 提出问题: 选中页数为1 显示了0
    // 解决 当页数为1 将beforeNumber改为1 afterNumber为除去省略号后面的一个按钮
    // 同理解决current == page
    // 又有问题 点击前三个应该不分页 到 4(针对pagerCount参数来说) 了该分页 同理求得current == page
    if (current >= 1 && current < pagerCount - 1) {
      beforeNumber = 1;
      afterNumber = pagerCount - 1;
    } else if (current <= page && current > page - (pagerCount - 2)) {
      beforeNumber = page - (pagerCount - 2);
      afterNumber = page;
    }

    for (let i = beforeNumber; i <= afterNumber; i++) {
      lis += `<li class="page-number ${
        i == current ? "active" : ""
      }">${i}</li>`;
    }
  }
  // 显示右省略按钮
  if (current <= page - (pagerCount - 2)) {
    lis += `
    <li class="material-icons page-dot page-dot-next"></li>
    <li class="page-number">${page}</li>`;
  }

  // 最后拼接右按钮
  // 当前页数不是总页数就为可点击态
  lis += `
<li class="material-icons page-btn page-btn-next ${
    current !== page ? "isClick" : ""
  }">
  keyboard_arrow_right
</li>`;
  _pagination.innerHTML = lis;
};
