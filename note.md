## DOM Element
- Truy  xuất vào các thẻ HTML => tạo Node (nút)
- Node là object
<!-- 
    1. Truy suất thông  qua Id => Chỉ chọn Element đầu tiên
    document.getElementById("id")

    2. Truy suất thông qua Class 
    document.getElementsByClassName("className")

    3. Truy suất thông qua tên thẻ
    document.getElementsByTagName("h1")

    4.Truy suất thông qua css Selector (chỉ lấy selector đầu tiên)
    document.querySelector(".title")

    5.Truy suất thông qua css Selector (Lấy tất cả)
    document.querySelectorAll(".title")

 -->



## DOM HTML
- Thay đổi nội dung và thuộc tính HTML
- CRUD
## DOM CSS 
- Thay đổi css inline của thẻ HTML
## DOM Navigation
<!-- 
    Thực hiện việc truy vấn vào các thẻ html theo phân cáp cha con
    - Chọn được element dựa vào 1 element khác:

        Lên cha: parentElement

        Xuống con: children =>Lấy danh sách các element con trực tiếp

        Kế tiếp: - nextElementSibling => Lấy thành phần kế tiếp ngang hàng
                
        Lùi lại: - previousElementSibling
 -->
## DOM Event
- Gán sự kiện vào thẻ HTML
## DOM Event listener
- Lắng nghe sự kiện

## DOM node 
- Thao tác với các element thông qua Object


<!-- classList:
- .add("class1", "class2", ...)    =>  Thêm một hoặc nhiều class
- .remove("class1", "class2", ...) =>  Xoá một hoặc nhiều class
- .toggle("class")	               =>  Thêm nếu chưa có, xoá nếu đã có
- .contains("class")	           =>  Kiểm tra phần tử có class hay không
- .replace("old", "new")           =>  Thay thế class cũ bằng class mới

 -->


## preventDefault() => Chặn hành động mặc định của thẻ HTML
## stopPropagation() => Đây là một phương thức của Event object dùng để ngăn sự kiện lan ra ngoài (gọi là "chặn lan truyền sự kiện" – event bubbling). (ngăn chặn nổi bọt)