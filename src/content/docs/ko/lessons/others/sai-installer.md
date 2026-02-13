---
title: "APKS/XAPK 설치 방법(SAI)"
description: "`.apks`, `.xapk` 형식의 Android 설치 패키지를 SAI로 설치하는 방법을 안내합니다."
---

일부 Android 설치 패키지는 `.apks`, `.xapk` 형식을 사용하기 때문에 그대로는 설치할 수 없습니다. 이때 SAI 설치 관리자가 필요하므로, SAI 설치 관리자를 사용하는 방법을 정리합니다.

## 사전 준비

먼저 SAI 설치 관리자를 다운로드합니다.

SAI: [다운로드](https://da-1302821495.cos.ap-chengdu.myqcloud.com/sai/SAI_4.5.apk)

그다음 설치할 앱 패키지 파일과 SAI 설치 파일을 휴대폰에서 찾기 쉬운 위치(예: 다운로드 폴더, 루트 디렉터리 등)에 넣어 둡니다.

### SAI 설치 관리자 설치

![img](/images/tutorial/sai-1.webp)

설치가 끝나면 앱을 실행합니다(권한 요청 팝업이 뜨면 반드시 허용하세요).

![img](/images/tutorial/sai-2.webp)

<details>
<summary>MIUI 사용자 주의!!!</summary>

MIUI는 "MIUI 최적화" 기능 때문에 SAI 설치 관리자로 앱을 바로 설치할 수 없습니다. 설치 전에 MIUI 최적화를 끈 뒤 설치해야 하며, 그렇지 않으면 설치 후 앱이 강제 종료되거나 설치 자체가 되지 않을 수 있습니다.

SAI를 열면 MIUI인지 자동으로 감지하고 개발자 옵션으로 들어가는 버튼을 제공합니다. 이를 눌러 들어간 뒤, 맨 아래로 내려 `MIUI 최적화`를 끄세요.

![img](/images/tutorial/sai-miui1.webp)
![img](/images/tutorial/sai-miui2.webp)

:::caution[경고]
MIUI 최적화를 끄면 휴대폰의 일부 기능이 초기화되거나 변경될 수 있습니다. 예: 아이콘, 폰트, 알림 스타일, 화면 녹화, 게임 모드

설치가 끝난 뒤에는 MIUI 최적화를 다시 켜세요.

<details>
<summary>개발자 옵션 수동 진입</summary>

설정 -> 내 기기 -> 전체 사양(또는 기기 정보) -> `MIUI 버전`을 10번 연속으로 탭합니다.  
그다음 `추가 설정`에서 개발자 옵션을 찾을 수 있습니다.

![img](/images/tutorial/sai-miuidev2.webp)
![img](/images/tutorial/sai-miuidev1.webp)
![img](/images/tutorial/sai-miuidev3.webp)
![img](/images/tutorial/sai-miuidev4.webp)

</details>
:::

</details>

### 앱 설치

아래의 `APK 설치`를 누릅니다.

`내장 파일 선택기`를 선택합니다.

![img](/images/tutorial/sai-3.webp)

권한 요청 팝업이 뜨면 전부 허용합니다.

![img](/images/tutorial/sai-4.webp)

그리고 방금 복사해 둔 두 파일이 있는 위치로 이동해, Unipad 설치 패키지를 선택합니다.

![img](/images/tutorial/sai-5.webp)

여기서는 `설치`를 누르면 됩니다.

![img](/images/tutorial/sai-6.webp)

이후 안내에 따라 설치를 진행합니다.

![img](/images/tutorial/sai-7.webp)
![img](/images/tutorial/sai-8.webp)

