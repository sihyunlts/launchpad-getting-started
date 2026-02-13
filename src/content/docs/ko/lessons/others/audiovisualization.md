---
title: "런치패드에서 오디오 시각화 만들기"
description: "Max for Live 플러그인 Echo를 사용해 런치패드로 오디오 시각화를 출력하는 방법을 설명합니다."
---

## 서문

런치패드에서 오디오 시각화를 만드는 것은 비교적 마이너한 활용 방법입니다. 런치패드 패드를 여러 대 가지고 있다면, 심심할 때 배경 장식처럼 두고 음악을 재생하면서 시각화를 띄워 볼 수도 있습니다. 그럼 시작하겠습니다.

## Echo 받기

[다운로드 페이지로 이동](/ko/res/amxd/)

Echo는 Kaskobi가 개발한 Max for Live 플러그인으로, 런치패드에서 오디오 시각화를 만들기 위해 만들어졌습니다.

## 사용 방법

### 플러그인 저장 위치

다운로드하면 압축 파일이 하나 있고, 그 안에 플러그인 2개가 들어 있습니다. 하나는 캡처(송신)용이고, 다른 하나는 수신(Reciever)용입니다.

Echo 본체는 다음 경로에 넣어야 합니다.

`User Library\Presets\Audio Effects\Max Audio Effect`

![img](/images/audiovisualization/echo1.png)

Echo Reciever는 다음 경로에 넣어야 합니다.

`User Library\Presets\MIDI Effects\Max MIDI Effect`

![img](/images/audiovisualization/echo2.png)

### Ableton Live 설정

Live를 열고, 왼쪽의 `브라우저 -> Max For Live -> Max Audio Effect`에서 Echo 본체를 찾아 `Master` 트랙에 로드합니다.

![img](/images/audiovisualization/setecho.png)
![img](/images/audiovisualization/setecho2.png)

그다음 왼쪽의 `브라우저 -> Max For Live -> Max MIDI Effect`에서 Echo Reciever를 찾아 아무 MIDI 트랙에나 로드합니다. 출력은 런치패드로 설정하고, 채널은 본인 장치에 맞게 선택하면 됩니다.

![img](/images/audiovisualization/setecho3.png)
![img](/images/audiovisualization/setecho4.png)

### 오디오 파일 재생

오디오 파일을 시각화하는 방법은 간단합니다. 오디오 파일을 Live로 드래그해 넣고 `Warp`를 끈 뒤 재생하면 됩니다. 그러면 시각화 효과가 출력됩니다.

![img](/images/audiovisualization/visual1.png)
![img](/images/audiovisualization/echowarp.png)
![img](/images/audiovisualization/visuals.png)

### 컴퓨터 소리 재생

:::caution[경고]
이 항목은 컴퓨터의 비교적 깊은 설정을 다룹니다. 이해가 되지 않는다면 함부로 조작하지 마세요.
:::

컴퓨터 소리를 시각화하려면, 컴퓨터의 소리를 Live로 라우팅해야 하므로 과정이 조금 번거롭습니다. 오디오 인터페이스가 있고 Loopback을 지원한다면 어떤 의미인지 이해할 것입니다.

그렇지 않은 경우도 많으므로, 여기서는 가상 사운드카드인 Voicemeeter를 사용합니다.

먼저 공식 사이트에서 다운로드해 설치한 뒤, 컴퓨터를 재부팅합니다. 가장 기본 버전이면 충분합니다. 다른 용도가 있고 무엇이 필요한지 알고 있다면, 필요에 따라 더 높은 버전을 받아도 됩니다.

[Voicemeeter 다운로드](https://vb-audio.com/Voicemeeter/index.htm)

설치를 완료하고 재부팅한 뒤, 컴퓨터의 출력 장치가 VoiceMeeter인지 확인합니다.

![img](/images/audiovisualization/audiooutput.png)

그다음 Voicemeeter를 실행합니다. 바로가기를 만들지 않으므로 `시작 메뉴`에서 찾아야 합니다.

![img](/images/audiovisualization/voicemeeter.png)

실행한 뒤 `Hardware Out`의 `A1`을 원래 컴퓨터에서 쓰던 기본 출력 장치로 설정합니다.

![img](/images/audiovisualization/setvoicemeeter1.png)

그다음 마스터 출력의 `A`와 `B`가 켜져 있는지 확인합니다. 정상이라면 우선 프로그램을 최소화해 둡니다. `×`를 누르면 프로그램이 바로 종료되니 주의하세요. 백그라운드 상주가 필요하다면 `Menu`에서 `System Tray`를 켜면 `×`로 닫아도 트레이로 들어갑니다.

![img](/images/audiovisualization/setvoicemeeter2.png)

이제 Live로 돌아가 `환경설정`을 열고, 입/출력을 전부 VoiceMeeter로 설정한 뒤 창을 닫습니다.

![img](/images/audiovisualization/setliveout.png)

Audio 트랙 1개와 MIDI 트랙 1개를 남깁니다. 위의 [Ableton Live 설정](#ableton-live-설정)과 같은 방식으로 트랙을 설정합니다. 다만 Audio 트랙은 모니터를 `In`으로 바꾸고, 해당 트랙을 끄면 됩니다.

이제 컴퓨터에서 재생되는 모든 소리가 Live로 캡처되고, Audio 트랙 안의 Echo로 전달되어 오디오 시각화가 출력됩니다(아래 참고).

![img](/images/audiovisualization/visual2.png)
