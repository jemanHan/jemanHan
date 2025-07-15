// ✅ 사용자 클래스 정의 (기존 User와 중복되지 않도록 이름 변경: AppUser)
class AppUser {
    // 사용자 이름을 저장할 속성
    userName!: string;
}

// ✅ 상품 클래스 정의 (기존 Product와 중복되지 않도록 이름 변경: AppItem)
class AppItem {
    // 상품 이름
    productName!: string;

    // 상품 가격
    price!: number;
}

// ✅ 제네릭 주문 클래스 정의
// TUser: 사용자 타입, TItem: 상품 타입을 외부에서 유연하게 주입 가능
class Purchase<TUser, TItem> {
    // 사용자 객체
    user!: TUser;

    // 상품 객체
    item!: TItem;

    // 요약 출력 메서드
    // - 외부에서 출력 형식을 함수로 받아서 출력할 수 있음
    summary(printer: (user: TUser, item: TItem) => string): void {
        console.log(printer(this.user, this.item));
    }
}

// ✅ 사용자 객체 생성 및 속성 설정
const buyer = new AppUser();            // AppUser 인스턴스 생성
buyer.userName = "홍길동";               // 사용자 이름 설정

// ✅ 상품 객체 생성 및 속성 설정
const productItem = new AppItem();      // AppItem 인스턴스 생성
productItem.productName = "책";          // 상품 이름 설정
productItem.price = 12000;              // 상품 가격 설정

// ✅ 제네릭 주문 객체 생성 (TUser = AppUser, TItem = AppItem)
const purchase = new Purchase<AppUser, AppItem>();

// 구매자 및 상품 정보 할당
purchase.user = buyer;
purchase.item = productItem;

// ✅ 주문 요약을 출력할 함수 정의
// - 이 함수는 summary()에 전달되어 커스터마이징된 형식으로 출력함
const printOrder = (u: AppUser, p: AppItem): string =>
  `🧾 ${u.userName}님이 '${p.productName}'을(를) ${p.price}원에 주문했습니다.`;

// ✅ 주문 요약 실행
purchase.summary(printOrder);
