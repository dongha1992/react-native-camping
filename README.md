
# 프로젝트 영상 

[전체 동영상](https://www.youtube.com/watch?v=uwiU6jmZeT8)

# 프로젝트 요약

1) 소개

 - react native expo 기반 캠핑 장소를 찾는 어플리케이션을 클론

2) 기간

 - 20.12.18 ~ 21.01.08 (14일간)

3) 인원

 - 프론트엔드 1명

4) 역할

- 프론트엔드



# 사용 스택

1) react-native expo

 - react-native 입문이라 cli대신 런닝커브가 낮은 expo를 사용함

2) redux 

 - 전역 상태 관리로 redux를 사용함


# 디렉토리 구조

1) App.js

![](https://images.velog.io/images/dongha1992/post/16917679-a23d-488f-9e71-0039162f0533/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.14.07.png)

login.js에서 로그인에 성공하면 Home으로 넘어간다.

2) ScreenNavigator.js

![](https://images.velog.io/images/dongha1992/post/cfcb46d6-d0f4-4900-b4d1-bba95654205a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.16.11.png)

```bottom-tab``` 기능을 하는```ScreenNavigator.js``` 에서 name에 따라 route 설정을 해준다. 


3) 스크린

![](https://images.velog.io/images/dongha1992/post/de5ae423-e837-47b1-b943-f6e86b91b839/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.13.07.png)

총 4개의 screen으로 구성되는데 사실 ```filter```는 ```
detail```에 스택에 있어야 하는데 navigation 공부가 부족해서 tab과 stack을 만드는 것이 부족해 tab으로 놔뒀다. navigation 기술 부채다!



# 기능 소개

 #### 0) 페이스북 로그인
 
![](https://images.velog.io/images/dongha1992/post/28d134d9-9248-44ec-ab22-9d096f2d733c/native_login.gif)

- 소셜 로그인을 후 사용자 정보를 ```AsyncStorage```에 저장


 #### 1) Home UI
 
 ![](https://images.velog.io/images/dongha1992/post/30d49104-93fb-4d4d-9671-caf62c1be745/native_list.gif)

 #### 1-1) Category List
  
![](https://images.velog.io/images/dongha1992/post/49c1dc81-bfe0-4b0b-b3ae-535539aaedf2/native_tab.gif)


- 백엔드가 없었기 때문에 더미 데이터를 사용했다. tab의 경우는 

![](https://images.velog.io/images/dongha1992/post/3595889c-44af-4554-bff3-0cbe73219228/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.19.13.png)

이렇게 키로 id와 name, place를 가지고 있는 배열을 ```
flatList```로 돌렸다. dispatch로 onPress할 때 id값을 가져오고 부모 컴포넌트인 ```Home.js```에서 find를 이용해서 해당 id를 가진 객체를 state에 넣었다.

![](https://images.velog.io/images/dongha1992/post/724f8b6b-ea9b-496b-a82e-5f07c45013c0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.22.30.png)

그리고 실제 해당 tab에 뿌려지는 컴포넌트에 그 리스트를 props로 넘긴다.

백엔드와 통신을 한다면 클릭할 때마다 query를 보내서 탭에 맞는 데이터를 받아오면 되지만 더미 데이터를 사용해야 해서 이렇게 로직을 짰다.

 #### 2) map
 
 ![](https://images.velog.io/images/dongha1992/post/4ae8e375-4f6b-4656-b08a-21d24ddaa064/native_map1.gif)
 
 ```react-native-map```에 제공하는 ```MapView``` 컴포넌트를 사용했다. 처음에 구조를 제대로 안 짜서 map tab 컴포넌트, map container 그리고 map list가 각각 다른 컴포넌트가 되어버려 데이터를 주고 받는 데 아주 아주 골치가 아팠다. 시작하기 전에 구조를 잘 짜기...
 
- tab을 눌렀을 때 지도에 type에 맞는 데이터 렌더하기

이것도 home에서 tab을 눌렀던 것과 비슷하다. 

![](https://images.velog.io/images/dongha1992/post/f2aaa578-5e97-45fc-b292-4b37ca4f9567/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.43.55.png)

먼저 하드 코딩으로 tab list를 만들고 부모 컴포넌트인 Detail에서 props로 내려준다. 이제 필요한 것은 리덕스와 useState다. 리덕스에서 state를 정의해준다. 필요한 것은 ```filters.type```

```reducer.js```

![](https://images.velog.io/images/dongha1992/post/8b915adc-1be0-43d6-8adf-77217814d794/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.46.24.png)

그리고 함수를 정의하고 onPress했을 때 해당 tab을 인자로 가져온다. 

![](https://images.velog.io/images/dongha1992/post/b53102cd-6e13-4071-89f6-5a01bfc25a62/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.48.08.png)

가장 아름다운 순간인데 ```setSelectedTabType```이란 액션에 tab을 주는 것이 아니라 ```{type: tab.type}``` 이런 식으로 reducer로 넘어갔을 때를 고려해서 미리 할당한다!

이게 무슨 말이냐하면 

```reducer.js```

![](https://images.velog.io/images/dongha1992/post/1ec5576c-905a-4b97-815f-2d8e5bb49908/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.50.33.png)

```filters```에 있는 하나의 키만 수정하는 것이니까 전개 연산으로 다 flat으로 만들고 ```type:action.payload```가 아니라 ```...action.payload```로 정의한다. 이렇게 되면 dispatch로 키 값만 잡아주면 state에 얼마나 많은 키가 있는지 상관없이 확장할 수 있다!!! 

> 나는 닥터 스트레인지가 손을 휙휙 저어서 공간을 뚫고 거기에 손을 뻗어서 원하는 물건을 쏙 가져오는 느낌으로 이해했다.


- 선택된 tab의 type을 적용해서 지도 렌더하기 

![](https://images.velog.io/images/dongha1992/post/3285aa9a-79cf-4551-95e4-b0014ad96258/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.54.56.png)

```useSelector```로 filters를 가져오고 실제 렌더될 map 컴포넌트에서 로직을 짠다!

![](https://images.velog.io/images/dongha1992/post/89e9e494-ef6e-43f4-a26d-3a51b173016c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.58.39.png)

일단 row 데이터는 ```campingData```를 state에 넣고 거기에 ```filteredList```라는 변수를 이용해서 가공한다. 그리고 filter된 list를 렌더하면 끝!!

 #### 3) map filter
 
 ![](https://images.velog.io/images/dongha1992/post/4641607d-593f-4499-ba89-a2df056f3926/native_filter.gif)
 
 ![](https://images.velog.io/images/dongha1992/post/f64ea42d-27df-408c-8d26-b65bfaad86ed/native_filter2.gif)
 
 
- 조건에 따라 다르게 리스트 렌더하기

여태까지 했던 것의 마지막 버전! 필수적으로 리덕스가 필요하다. 일단 필터 버튼을 하드 코딩으로 만들어 준다. 여기서 name은 리덕스에서 키값으로 잡아야하니까 리덕스와 맞춰야 한다. 

![](https://images.velog.io/images/dongha1992/post/146d7ff0-acb1-4cfb-9904-ded6bf7623ec/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.05.13.png)

그리고 아까와 마찬가지로 dispatch로 state에 선택된 type을 가져온다.

![](https://images.velog.io/images/dongha1992/post/0adcfd2f-4624-4d1a-ab88-ad01474519ee/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.06.32.png)


> {sort: button.name}을 통해 리듀서 state에 내가 원하는 키에 데이터를 할당할 수 있다!!

그리고 리스트를 렌더하는 컴포넌트에서 작업을 시작한다.

![](https://images.velog.io/images/dongha1992/post/c68c560e-dbe6-4899-b87f-5d3e7e06bb31/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.09.21.png)

부끄럽지만 filter.js에서 발생한 이벤트가 전혀 다른 컴포넌트인 map list.js에 어떻게 연결할 함수가 없어서 그냥 컴포넌트 안에 변수를 선언했다. 뭔가 되게 엉망인 거 같지만... 처음이니까 봐준다... 다음부터 열심히하자!

아무튼 아무것도 선택하지 않으면 리덕스에 저장된 initial state의 filter의 조건이 적용되고 무언가 선택하면 저 변수를 통해서 새로운 list가 렌더된다. 삼항 + 함수 조합은 정말 꿀인 거 같다. ```lists```는 row 데이터를 state시킨 것!

 #### 4) book mark

![](https://images.velog.io/images/dongha1992/post/c737b9f5-9bfe-448c-bd35-accd55dd0bb4/native_bookmark.gif)

북마크는 오직 리덕스를 사용한다! 어려웠던 점은 이미 하트를 두 번 클릭했을 때 삭제하는 로직이었는데 생각보다 아주 간단히 짜버렸다! 먼저 클릭하면 dispatch로 list를 통으로 리듀서로 가져간다. 

![](https://images.velog.io/images/dongha1992/post/bf3ff3f6-6d9c-4ca3-9500-b5fc93a31276/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.29.47.png)

요렇게 짰다. 추가할 때는 row 데이터를 기준으로 dispatch에 집어 넣고 이미 reducer안에 state에 해당 데이터가 있으면 filter로 삭제한다.  

# 배웠던 점

- 프로젝트를 진행하면서 새로운 것을 많이 배웠는데 public 관리하는 것을 제대로 익혔다!

1) image

![](https://images.velog.io/images/dongha1992/post/ab6d6d07-5e2c-4538-be36-6861e80978e4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.32.24.png)

이렇게 assets 폴더에 넣고 constant 폴더에 images.js에 정의해준다. 

![](https://images.velog.io/images/dongha1992/post/469b49ff-6878-49f8-8eb4-9e0b042c6d97/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.32.58.png)

그리고 index에서 export

![](https://images.velog.io/images/dongha1992/post/76a9972d-45e0-457b-ad86-772fb2ebf874/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.33.25.png)

깔끔하다. 

2) 삼항 + 스타일

![](https://images.velog.io/images/dongha1992/post/6d5a1999-5a9b-4bdd-b4b7-c9a0594ecf5e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.35.34.png)

배열 안에 삼항을 해주면 조건에 따라 추가적인 스타일이 적용된다!

3) dispatch 에러

```
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

You might have mismatching versions of React and the renderer (such as React DOM)
You might be breaking the Rules of Hooks
You might have more than one copy of React in the same app

```

dispatch 쓸 때 종종 이런 에러가 나왔는데 useCallback에 dispatch를 넣어야 한다는 스택오버플로우 글을 봤다. 해결하진 못했지만 call back 공부와 리덕스 공부를 더 해야할 듯!!
