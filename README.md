# <img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/d97e506b-5d55-4741-9624-4486641acb5d" width="13%" height="">   BAEBLOCK- Delivery Dapp
> 스마트컨트랙트를 통해, 수수료를 절반 이상 낮춘 배달 Dapp “배불럭”<br>

<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/99a27f30-2d75-4dbc-88bc-3176acd5b759" width="" height="">

## 앱 소개
`🔎 스마트컨트랙트를 통해, 수수료를 절반 이상 낮춘 배달 Dapp “배불럭”`
>📱 기존의 비싼 배달앱 중개 수수료 
>💵 가게, 배달원, 고객이 지불하는 돈의 흐름(배달앱과 배달회사에서 가져가는 수수료)이 불투명  

<br>

`💡이런점을 개선했어요!`

>기존 배달앱보다 중개 수수료를 절반 이상 낮춤
>정산 및 결제 수수료를 Polygon Chain을 활용하여 gas fee로 최소화
>스마트 컨트랙트 기반으로 가게,배달원,고객에게 투명성 제공

<br>

## 📚 실행 가이드 및 설치 방법(How to build)
### 설치/실행 방법

`❗️❗️로컬로 진행 시, DIR root에 .env파일 생성 후 
REACT_APP_API={폴리곤API키}, REACT_APP_KAKAO_JAVASCRIPT_KEY={카카오맵 API} 입력 참고해주시면 감사하겠습니다!`




<br>
<details>
<summary>1. 고객페이지로 입장하여 장바구니에 음식담기 =>결제하기.</summary>
<div markdown="1">

```
❗️❗️더미데이터를 사용하여 가게의 주소가 지정되어 있습니다.
주문을 넣으신 뒤 psh7452@naver.com에 연락주시면 조리 완료 진행해드립니다!
```

</div>
</details>

<details>
<summary>2. 라이더 계정으로 회원가입 및 nft 발행.</summary>
<div markdown="1">

```
* 라이더 계정으로 회원가입을 진행하고, 배달 권한을 얻기 위해 NFT마켓에서  NFT를 발행받으세요!
```

</div>
<details>
<summary>3. 새로들어온 주문목록에서 주문을 선택,배달시작.</summary>
<div markdown="1">

```
* 자신이 배달할 주문건을 선택하고, 배달시작 버튼을 눌러 배달상태에 변경을 일으킵니다.
```

</div>
<details>
<summary>4. 진행중인 배달목록에서 배달 완료.</summary>
<div markdown="1">

```
* 배달 완료 버튼을 눌러 배달 상태를 완료시킵니다.
```

</div>
<details>
<summary>5. 고객 계정의 마이페이지(로켓아이콘)에서 주문 내역을 확인합니다.</summary>
<div markdown="1">

```
* 주문 내역에서  배달완료 버튼을 눌러 라이더와 가게에게 컨트랙트에 묶여있던 돈을 보내줍니다.
```
</div>

</details>

<br>


## 프로젝트 특징
`💡고객, 매장,라이더에 따라 나뉘는 로그인/회원가입 페이지`

### 메타마스크를 연결하여 회원가입/로그인을 진행해요!
>**회원가입을 하여 회원정보를 등록하는 transaction을 실행합니다.**  
지갑연결 ➔고객/매장/라이더 선택➔ 회원가입 ➔로그인

<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/073a0c32-a7f5-4917-b93d-ea3c312214f9" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/5aa0dd46-48ae-4076-9702-88d138de6279" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/ed3d5071-ab3e-4672-831e-88d99bbfe647" width="16%" height="16%">
<br>

### 가게 사장님에게 들어온 주문을 확인해요!
>**가게에 들어온 주문을 확인하고, 주문진행상태를 변경하는transaction을 실행합니다**  
주문 상태를 수락/거절 한 뒤, 조리 완료로 변경 할 수 있습니다. 또한 NFT를 구매하여 30일간 중개수수료를 면제받을 수 있습니다.

<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/95e8a701-c0f1-4414-a153-8273f2d11356" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/ec08a719-238f-46ca-b1e0-c64b0fc4a62f" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/43c609cf-a558-476b-98fa-a9ee0effbf2e" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/e771485e-a9bf-49cd-903b-767e88a8a95d" width="16%" height="16%">
<br>

### 먹고 싶은 음식을 주문해요!
>**원하는 음식을 장바구니에 담고 '결제하기'로 transaction을 실행해합니다**  


<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/8cad7a62-4973-4c59-94be-9329a45fb72b" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/4a3a5441-a4c3-4459-b95d-a3d36f8f967c" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/074528ea-efef-4fb4-bfaa-ad0f80afe644" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/b31a6c6a-a953-49ec-9af3-8022759863fb" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/581fa1b3-bdcc-4a14-9306-4908d71cd52f" width="16%" height="16%">
<br>
### 원하는 주문건을 선택하여 배달을 시작해요!
>**배달 주문건 선택, 배달 상태 변경으로 transaction을 실행합니다.**  
조리가 완료된 주문들을 배달대기목록에서 선택하고, 배달 시작, 완료를 진행합니다. 또한 NFT를 구매하여 60일간 배달 할 수 있는 권리를 받을 수 있습니다.(NFT 없거나 유효기간 만료시, 배달 선택 불가)

<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/601dac80-1859-4a29-8523-52175624bfd2" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/3276fb06-0042-4dd7-bf61-9134c7bb5442" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/92c18839-5c28-420c-bffd-639c6a6450d2" width="16%" height="16%"><img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/ae2cf1ec-7718-4b5d-9522-d7b43964b018" width="16%" height="16%">
<br>



## 활용기술

#### Language 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/af410c99-2486-4a06-baa2-536f74fc40cd" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/3152c640-92d9-412e-8c41-1a627de662be" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/395f87a9-884d-4df3-8e72-d6b0e73438f2" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/99c1317a-831c-4c2c-a9e4-521106bb81c4" width="30"/> <br/>

#### Framework, Library
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/c411786a-6240-4932-b023-035abb81d1da" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/cd356e97-db7c-4219-829f-825d8f83a529" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/234da4ed-9f29-4a20-9c13-ffecec5cca08" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/7cf2cff5-5788-4224-9650-21d8aaf3b17b" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/925c8490-a38a-4e4d-ad6d-c9a2c76f7c81" width="30"/> <br/>

#### IDE
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/5c66cd40-d976-4cda-bd2e-62e0428d184a" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/28f6e6eb-aa41-48bf-9194-e9945310e7ed" width="30"/>
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/d754540d-793d-4327-839a-90fed83d4288" width="30"/> <br/>

#### Cooperation Tools
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/e8e67d0d-0375-40fb-933f-d5c0226bbe3a" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/0d245347-599d-43a0-93cd-1d1871aea4c9" width="30"/> 
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/4ebfff7d-3fee-4cea-b272-c4b79875a013" width="30"/>  <br/>

#### Deployment
<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/55d93373-a5b0-4b89-9895-28610b3279b1" width="30"/> 
 
<br>

## 프로젝트 참여자
|  김가형  <br/>[@hyeongga](https://github.com/hyeongga)| 김시온<br/> [@sionkimsion](https://github.com/sionkimsion) | 박석훈<br/> [@Prkskhn](https://github.com/Prkskhn) |  진현석<br/>[@Dakdol](https://github.com/Dakdol) |
| :----------------------------------------------------------: | :---------------------------------------------: | :------: | :-------------------------------------------------: |
|<img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/be69bd04-cf55-4dcb-8088-b636587b03d5" width=200><br/>자료조사<br/>버그수정<br/>앱 구동 테스트  | <img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/a9f3a858-63be-498f-82a0-feb00f2945af" width=200><br/>아이디어 기획<br/>전체 페이지 디자인<br/>시연 영상 편집 | <img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/7a6f3c17-2345-43fd-b9af-865ada3a1c97" width=200><br/>Payment Smart Contract<br/>Web3.js| <img src="https://github.com/Prkskhn/BaeBlock/assets/104644024/15959d1c-a3eb-4c71-80c8-9dab651c0704" width=200><br/>NFT Smart Contract<br/>Web3.js |

---
