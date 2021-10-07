## FrontEnd Coding Test Template

#### ⚓ &nbsp; 구현한 기능

* 유저가 처음 페이지를 열었을 때 ``/home`` 에 도착하도록 만들어 주세요
  - 개인적으로 추가하고 싶은 디자인은 자유롭게 추가하셔도 됩니다 😊
  - 홈페이지에서 ``/beerlist`` 로 링크 이동할 수 있어야 합니다

* material table library(https://material-table.com/#/docs/get-started) 를 사용해서 맥주 리스트 페이지(/beerlist)를 만들어 주세요
  - material UI의 컴포넌트를 사용하는것이 아닙니다. 위에 있는 링크의 라이브러리를 사용해주세요.

* 장바구니를 만들어 주세요 
  - 맥주를 장바구니에 추가하거나 삭제가 가능해야 합니다
  - 장바구니는 ``/home`` 또는 ``/beerlist`` 에서 접근 가능해야 합니다

<br/>

#### ⚓ &nbsp; 구현이 완전히 되지 않은 기능

* 테이블의 column header 는 드래그로 순서 변경이 가능해야 합니다. 바뀐 column header 순서는 redux 에 저장되어 ``/home`` 와 ``/beerlist`` 사이 이동시에 유지되어야 합니다
  - 위 라이브러리에서 드래그 기능을 지원합니다.<br/>
 => 바뀐 column header 순서는 redux 에 저장되지만, BeerList 페이지 화면 상에서 드래그가 되지 않는 버그 발생<br/>
 => 리덕스의 cartData를 그대로 화면에 렌더링하면 되는 Cart 페이지와 달리, <br/>BeerList 페이지는 이미 기존에 렌더링하던 data(맥주 API)가 있는 상태에서 화면을 이동했다가 다시 돌아왔을 때 column header 순서가 바뀌어 있는 데이터로 렌더링해야 하는데 이 부분의 구현이 어려움 <br/>(data={data} 부분을 삼항연산자로 시도했지만 MaterialTable 자체의 문법에 어긋나서 인식하지 못함)
 
 <br/>
 
* 맥주 리스트의 알콜 도수 ``(abv)`` 필터 기능을 만들어 주세요 [ 예) "5-6", "6-7" ]
  - 필터는 다중 선택이 가능해야 합니다
  - 필터 기능은 material table library 에 포함되어 있는 기능을 ``사용하지 말고`` 따로 제작해야 합니다<br/>
 => BeerList 페이지 첫 렌더링 후 처음 누르는 Range 버튼(헤더 아래 나열된 색색깔 버튼)만 필터 기능 구현<br/>
 => 두번째 버튼부터는 빈 테이블이 렌더링되며 다중 선택은 구현하지 못함<br/>
 
 <br/>
 
#### 💡 &nbsp; 비구현 기능

* 맥주 이름을 클릭했을 때 해당 맥주의 상세 정보를 볼 수 있는 modal 을 제작해 주세요<br/>
=> 나중에 개인적으로 추가해볼 예정입니다

 
* 필수 과제 외에 추가적으로 넣고 싶은 기능이 있는 경우 자유롭게 추가해 주세요 
  
### 📝 &nbsp; 평가 기준
* 기능 완성도(50%)
* 코드 구성(35%)
* UI 완성도(15%)

#### 🎈🤖&nbsp; 과제 진행 중 추가적인 문의 사항이 있으실 경우, 언제든지 편하게 연락 주시기 바랍니다. &nbsp; 💌🎉
<br /><br />
### ** 과제 제출 시 개인 github에 repository를 생성하시고 메일로 링크 보내주시면 됩니다 **
