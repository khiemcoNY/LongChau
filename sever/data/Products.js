const products = [
  {
    name: "Siro Bổ Phế Bối Mẫu Forte Mom And Baby",
    image: "/images/1.png",
    description:
      "Được kết hợp từ 100% dược liệu tự nhiên, Bối Mẫu Forte hỗ trợ giảm ho an toàn, hiệu quả cho cả người lớn và trẻ nhỏ. Để cả gia đình tận hưởng trọn vẹn những giây phút quây quần bên nhau mà không bị cơn ho khó chịu cản trở ",
    price: 20,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Viên Uống Phế Khang Hải Thượng Vương Chiết Xuất Xuyên Tâm Liên",
    image: "/images/2.png",
    description:
      "Phế Khang Hải Thượng Vương được bào chế từ xuyên tâm liên, thanh hao, cúc tím và một số dược liệu khác giúp bổ phế, giảm ho và giảm biểu hiện tăng tiết đờm. Sản phẩm thích hợp sử dụng cho người bị ho dai dẳng do nhiều nguyên nhân: người bị đau rát, khản tiếng do ho kéo dài.",
    price: 15,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Viên Uống Giảm Viêm Họng, Viêm Phế Quản Xuyên Tâm Liên Plus Echinacea Kingphar",
    image: "/images/3.png",
    description:
      "Xuyên Tâm Liên Plus Echinacea Kingphar hỗ trợ giảm ho, giảm đờm, giảm đau rát họng, khản tiếng do viêm họng, viêm phế quản.",
    price: 22,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Viên Uống Hỗ Trợ Điều Trị Viêm Họng Echina Kingphar",
    image: "/images/4.png",
    description:
      "Viên uống Echina của Kingphar giúp kích thích cơ thể tăng cường miễn dịch, chống lại các tác động của vi khuẩn gây ra bệnh đường hô hấp. Đồng thời có thể giúp làm giảm những nguy cơ mắc các bệnh cảm cũng như rút ngắn thời gian mắc bệnh. Sản phẩm Echina của Kingphar đã được Bộ Y Tế cấp giấy chứng nhận an toàn cũng như đảm bảo hiệu quả cho người dùng.",
    price: 32,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Keo Ong Xanh Tracybee Propolis Mint & Honey Vị Bạc Hà",
    image: "/images/5.png",
    description:
      "Thực Phẩm Bảo Vệ Sức Khỏe Keo Ong Propolis Mint & Honey Vị Bạc Hà chứa thành phần: Keo ong, vị bạc hà tự nhiên, mật ong, nước… giúp bổ sung kháng thể tự nhiên của keo ong, giúp hạn chế quá trình oxy hóa, giúp kháng khuẩn trong khoang miệng và đường hô hấp. Cơ chế xịt phun sương giúp keo ong phân tán đều, len lỏi vào các niêm mạc họng. Sản phẩm dành cho trẻ em trên 24 tháng tuổi và người trưởng thành. Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.",
    price: 12,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Xịt Họng Xuyên Tâm Liên Hải Thượng Vương",
    image: "/images/6.png",
    description:
      "Xuyên Tâm Liên Hải Thượng Vương là sản phẩm dạng xịt chứa thành phần nổi bật xuyên tâm liên, keo ong nhập khẩu Ý và chiết xuất lá thường xuân nhập khẩu từ Pháp, thích hợp dùng cho người bị viêm họng, viêm phế quản. Sản phẩm xịt có thể nhổ ra hoặc nuốt mà không gây hại cho sức khỏe người sử dụng.",
    price: 15,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Keo Ong Tracybee Propolis Tutti Frutti & Honey For Kids",
    image: "/images/7.png",
    description:
      "Propolis Tutti Frutti & Honey là loại keo ong được tổng hợp từ hơn 70 hợp chất tốt nhất cho sức khỏe. Sản phẩm có tác dụng giúp kháng khuẩn cho đường hô hấp, tăng cường hệ miễn dịch và đẩy lùi các vi khuẩn gây hại xâm nhập vào cơ thể của bé. Cơ chế xịt phun sương giúp keo ong phân tán đều, len lỏi vào các niêm mạc họng.",
    price: 10,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Viên Uống Tăng Cường Tuần Hoàn Não Bamogin",
    image: "/images/8.png",
    description:
      "Viên uống tăng cường tuần hoàn não Bamogin Thành Công bổ sung các dưỡng chất thiết yếu giúp tăng tuần hoàn não, tăng khả năng tập trung, giảm căng thẳng và cải thiện trí nhớ. Chiết xuất bạch quả, đinh lăng có tác dụng tăng tuần hoàn động mạch, tăng lưu lượng máu não, tăng chuyển hóa năng lượng và bình thường hóa mức tiêu thụ oxy ở não. Từ đó giúp cải thiện trí nhớ, điều trị suy giảm tâm thần, trầm cảm, thiếu nhạy bén...",
    price: 23,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Viên Uống Tăng Cường Tuần Hoàn Não Hoạt Huyết Thông Mạch Hoàng Gia Royal Care",
    image: "/images/9.png",
    description:
      "Kế thừa tinh hoa bài thuốc cổ phương, Hoạt Huyết Thông Mạch Hoàng Gia - Royal Care giúp hoạt huyết, lưu thông máu, hỗ trợ giảm triệu chứng liên quan đến mạch máu não, tiền đình, vai gáy, hội chứng tiền đình do thiểu năng tuần hoàn não",
    price: 33,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Viên Uống Hoạt Huyết Dưỡng Não Omexxel Ginkgo",
    image: "/images/10.png",
    description:
      "Omexxel Ginkgo 120 với công thức chứa Ginkgo biloba và Omega-3 làm giảm tác động oxy hóa tế bào, tăng cường tuần hoàn máu não giúp tăng hoạt động của các tế bào thần kinh, tăng hoạt động tư duy. Phòng ngừa và hỗ trợ điều trị tình trạng sa sút trí tuệ, giảm trí nhớ. Giúp não bộ hoạt động tốt hơn, minh mẫn, sáng suốt.",
    price: 39,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Viên Uống Bổ Não Trợ Tim Nattocerebest 1000-Q10",
    image: "/images/11.png",
    description:
      "NattocereBest với các nguyên liệu được chiết xuất 100% từ thiên nhiên có hoạt tính sinh học cao. Trong đó có nattokinase, thành phần tham gia trực tiếp tiêu sợi fibrin và kích thích cơ thể tăng cường sản sinh plasmin, ngăn ngừa và làm tan cục máu đông, giải phóng tiểu cầu, giải tỏa những vùng lưu thông máu bị tắc nghẽn. Theo các nghiên cứu, tác dụng tiêu sợi huyết của nattokinase cao gấp 4 lần so với plasmin. Nhờ đó, sản phẩm giúp làm tan máu đông, hỗ trợ điều hòa và lưu thông máu, cải thiện các triệu chứng liên quan đến hệ thần kinh một cách hiệu quả. ",
    price: 40,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Bình Xịt Mũi Muối Biển Nano Sea Baby Spray",
    image: "/images/12.png",
    description:
      "Là dung dịch rửa giúp làm sạch mũi, lấy đi những bụi bẩn, lấy đi những dịch nhầy trong mũi và hỗ trợ làm giảm dịch mũi, thông mũi cho trẻ",
    price: 12,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Chai Hít Starbalm Sports Inhaler",
    image: "/images/13.png",
    description:
      "Chai Hít Starbalm Sports Inhaler Novum 1,1Gr với sự kết hợp giữa mùi hương Khuynh Diệp và Bạc Hà, giúp lưu thông đường hô hấp, giúp bạn hít thở sâu hơn, tăng cường trao đổi khí. Nhờ đó, lượng oxi trong máu được tăng lên, giúp bạn tỉnh táo và tăng năng suất hoạt động",
    price: 10,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Nước Muối Sinh Lý Fysoline Gifrer Vệ Sinh Mắt Mũi Cho Bé",
    image: "/images/14.png",
    description:
      "Fysoline Septinasal Gifrer được sản xuất theo tiêu chuẩn an toàn châu Âu dưới dạng ống đơn liều, đầu trò và nhỏ, sử dụng một lần nên không nguy cơ lây nhiễm chéo và tránh gây tổn thương niêm mạc. Sản phẩm giúp giảm tắc nghẽn mũi nhờ cơ chế loại bỏ chất nhầy và cải thiện triệu chứng trong các trường hợp cảm lạnh, viêm mũi, cảm cúm giúp trẻ dễ thở hơn.",
    price: 9,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
