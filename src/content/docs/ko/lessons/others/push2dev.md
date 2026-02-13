---
title: "Ableton Push 2 기술 및 설정 절차"
description: "Ableton Push 2의 프로젝트 호환, 색상 팔레트, 화면/비디오 재생, Max 관련 설정을 정리합니다."
---

:::caution[주의]
이 문서는 일정 수준의 컴퓨터 기초 지식과 프로젝트 제작 기초가 있어야 이해할 수 있습니다.
:::

## 패드 레이아웃

기본값은 `XY Layout`입니다.

런치패드와 호환해야 한다면 Project Manager 또는 MIDI Manager를 사용해 `Drumpad Layout`으로 변환한 뒤 프로젝트를 제작해야 합니다.

호환이 필요 없다면 기본값 그대로 사용하면 됩니다.

## 팔레트

기본 팔레트는 런치패드와 다릅니다([보기](/ko/res/palette/#ableton-push-2-%EA%B8%B0%EB%B3%B8-%ED%8C%94%EB%A0%88%ED%8A%B8)). 하지만 동일하게 127색입니다.

런치패드와 호환해야 한다면 Project Manager 또는 MIDI Manager로 `Novation Palette`로 변환하고, Eyedrop에서 팔레트를 로드한 뒤 프로젝트를 제작하면 됩니다.

호환이 필요 없다면 기본값 그대로 사용하면 됩니다.

## 디스플레이 파라미터

- 해상도: `960x160`
- 비디오 형식: `MP4`, `MOV`(테스트됨)
- 필요 플러그인: `Push 2 Video Player`, `Push 2 Video Player (Master)`

[Push 2 Video Player 다운로드](https://da-1302821495.cos.ap-chengdu.myqcloud.com/amxd/Kaskobi/Push%202%20Video%20Player.amxd)

[Push 2 Video Player (Master) 다운로드](https://da-1302821495.cos.ap-chengdu.myqcloud.com/amxd/Kaskobi/Push%202%20Video%20Player%20%28MASTER%29.amxd)

## 터치 스트립 라이트

:::tip[안내]
이 항목은 macOS 전용이며, 아직 테스트하지 않았습니다.
:::

`Push 2 Setting.mxf`가 필요합니다.

[Push 2 Setting 다운로드](https://da-1302821495.cos.ap-chengdu.myqcloud.com/amxd/Kaskobi/Push2%20Settings.mxf)

## 설정 절차

### macOS

추가 설정은 필요 없습니다.

1. 환경설정에서 `Control Surface`를 `None`으로 설정합니다(입력/출력 모두).
1. 포트의 `Track`과 `Remote`(외부 컨트롤)를 켭니다(입력/출력 모두).
1. 프로젝트를 로드한 뒤 입/출력을 설정할 때 첫 번째 포트를 선택합니다. 출력 채널은 기본값인 `Ch 1`을 유지하면 됩니다.

### Windows

Windows에서는 Ableton이 드라이버를 별도로 제공하지 않아 Max와 동시에 사용할 수 없으므로, 터치 스트립 라이트를 호출할 수 없습니다.

디스플레이에 내용을 표시하려면 Max에 프레임워크 2개를 설치해야 합니다.

- `imp.push`(디스플레이 제어 스크립트)
- `VIDDLL`(비디오 재생 엔진)

`imp.push`는 여기에서 다운로드할 수 있습니다: [다운로드](https://github.com/pixsperdavid/imp.push/releases)

다운로드한 뒤 압축을 풀고, 폴더를 다음 경로에 넣습니다.

`%USERPROFILE%\\Documents\\Max 8\\Packages`

`VIDDLL`은 Max 메뉴에서 `File -> Show Package Manager`로 들어가 다운로드할 수 있습니다.

준비가 끝나면 프로젝트 설정 방법은 위의 macOS와 동일합니다.

## Max란 무엇이며, 어떻게 실행하나요?

Max는 디지털 음악 소프트웨어 프로그래밍 시스템이며, Ableton Live와 깊게 통합되어 있습니다. 많은 내장 이펙트 엔진도 Max 기반입니다.

Ableton Live에는 Max가 포함되어 있어 별도 설치가 필요 없지만, 최신 버전을 추가로 설치할 수도 있습니다. 위에서 언급한 프레임워크에는 최소 Max 버전 요구가 있고, Live를 오래 업데이트하지 않았다면 포함된 Max 버전이 낮아 프레임워크와 호환되지 않을 수 있기 때문입니다.

### 내장 Max 사용

다음 경로로 이동합니다.

`%ProgramData%\\Ableton\\Live 11 Suite\\Resources\\Max`

`Max.exe`를 더블클릭하면 실행됩니다.

:::tip[안내]
Live 10이라면 위 경로의 `Live 11 Suite`를 `Live 10 Suite`로 바꿔야 합니다.

설치 위치를 기본값으로 두지 않았다면, 직접 설치 위치를 찾아 `Max` 디렉터리로 들어가야 합니다.
:::

### 외부 독립 실행형 Max 사용

공식 사이트에서 다운로드합니다: [이동](https://cycling74.com/downloads)

다운로드 후 설치하며, 설치 경로는 기본값으로 유지하는 것을 권합니다.

설치가 끝나면 Live를 열고 `환경설정 -> Folder -> Max 애플리케이션`에서 `찾아보기`를 눌러, 방금 설치한 독립 실행형 Max의 설치 경로로 바꿉니다.

`%ProgramFiles%\\Cycling '74`

확인한 뒤 Live를 재시작하면 됩니다. 이후 Max는 바탕화면 바로가기를 더블클릭해 실행할 수 있습니다.
