const express = require("express")
const app = express()


const products = [
    {
        id: 1,
        title: 'queen pannel bed',
        price: 400000,
        description: ' Chỗ nghỉ cung cấp dịch vụ lễ tân 24 giờ, dịch vụ đưa đón sân bay, dịch vụ trợ giúp đặc biệt và WiFi miễn phí trong toàn bộ khuôn viên. Tất cả phòng nghỉ tại đây đều được trang bị máy điều hòa, TV màn hình phẳng với truyền hình vệ tinh, ấm đun nước, vòi sen, máy sấy tóc và tủ để quần áo. ',
        imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
        id: 2,
        title: 'king panel bed',
        price: 350000,
        description: 'Khách sạn 4 sao này có WiFi miễn phí, quầy bar và sân hiên. Chỗ nghỉ cung cấp dịch vụ lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại tệ cho khách. Tất cả phòng nghỉ của khách sạn đều được trang bị máy điều hòa, TV truyền hình cáp màn hình phẳng, ấm đun nước, chậu rửa vệ sinh (bidet), máy sấy tóc và tủ để quần áo. ',
        imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 3,
        title: 'single panel bed',
        price: 500000,
        description: 'Trong số các tiện nghi của chỗ nghỉ này có nhà hàng, lễ tân 24 giờ, dịch vụ phòng và WiFi miễn phí trong toàn bộ khuôn viên. Khách sạn cung cấp phòng gia đình. Phòng nghỉ tại khách sạn được trang bị máy điều hòa, truyền hình vệ tinh màn hình phẳng, ấm đun nước, chậu rửa vệ sinh (bidet), máy sấy tóc và bàn làm việc.',
        imageUrl: 'https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 4,
        title: 'twin panel bed',
        price: 700000,
        description: 'Khách sạn 4 sao này có WiFi miễn phí, quầy bar và sân hiên. Chỗ nghỉ cung cấp dịch vụ lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại tệ cho khách. Tất cả phòng nghỉ của khách sạn đều được trang bị máy điều hòa, TV truyền hình cáp màn hình phẳng, ấm đun nước, chậu rửa vệ sinh (bidet), máy sấy tóc và tủ để quần áo.',
        imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    {
        id: 5,
        title: 'fridge',
        price: 300000,
        description: 'Trong số nhiều tiện nghi của chỗ nghỉ này có sảnh khách chung, vườn và khu vực bãi biển riêng. Chỗ nghỉ cung cấp dịch vụ lễ tân 24 giờ, dịch vụ đưa đón sân bay, dịch vụ phòng và WiFi miễn phí trong toàn bộ khuôn viên. ',
        imageUrl: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        id: 6,
        title: 'dresser',
        price: 600000,
        description: 'Chỗ nghỉ có lễ tân 24 giờ, dịch vụ đưa đón sân bay, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên. Khách sạn cung cấp phòng nghỉ có máy điều hòa, bàn làm việc, ấm đun nước, tủ lạnh, minibar, két an toàn, TV màn hình phẳng và phòng tắm riêng với vòi xịt/chậu rửa vệ sinh.',
        imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 7,
        title: 'couch',
        price: 400000,
        description: 'Chỗ nghỉ cung cấp dịch vụ lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại tệ cho khách. Tất cả phòng nghỉ của khách sạn được trang bị máy điều hòa, truyền hình vệ tinh màn hình phẳng, ấm đun nước, chậu rửa vệ sinh (bidet), máy sấy tóc và tủ để quần áo. Mỗi phòng đều có phòng tắm riêng với vòi sen và đồ vệ sinh cá nhân miễn phí. ',
        imageUrl: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 8,
        title: 'table',
        price: 300000,
        description: 'Chỗ nghỉ này cung cấp WiFi miễn phí trong tất cả các khu vực và chỗ đỗ xe riêng ngay tại khuôn viên. Căn hộ này còn có sân hiên. Du khách cũng có thể thư giãn trong vườn hoặc tại khu vực tiếp khách chung. ',
        imageUrl: 'https://images.unsplash.com/photo-1631049035634-c04c637651b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
]

app.get("/v1/products", (req, res) => {
    res.status(200).json(products)
})

app.listen("8080", () => {
    console.log('Server is running...');
})

