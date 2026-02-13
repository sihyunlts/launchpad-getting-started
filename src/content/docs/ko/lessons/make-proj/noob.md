---
title: "프로젝트 제작 튜토리얼: 초보자 편"
description: 오디오 슬라이스부터 Drum Rack 배치, 기본 라이트 제작과 로딩까지의 흐름을 다룹니다.
---

## 서문

프로젝트 제작 튜토리얼의 초보자 편에 오신 것을 환영합니다.
시작 편인 만큼 복잡한 내용은 다루지 않습니다. 기본적인 프로젝트 제작 흐름을 설명하고, 오디오 분리 같은 복잡한 내용은 잠시 다루지 않습니다.
따라서 초보자 편에서는 왼손 드럼 파트는 포함하지 않고, 오디오를 조각으로 잘라 `Drum Rack`에 넣어 소리를 내는 방법을 중심으로 안내합니다.

## 준비 작업

### 곡 준비

프로젝트로 만들고 싶은 곡을 하나 고른 뒤 다운로드합니다. 권장 파일 형식은 `.wav`, `.mp3`, `.flac` 등입니다.

## Live Set 설정

준비가 끝나면 본격적으로 프로젝트를 만들기 시작합니다.
Live를 실행한 뒤, 좌측 상단의 `파일 -> 새 Live Set`을 눌러 새 프로젝트를 만듭니다.

먼저 프로젝트를 저장하는 것을 권합니다. 찾기 쉬운 위치에 저장하면 됩니다.
저장 시 Live가 자동으로 폴더를 하나 생성하며, 그 안에 여러 폴더와 `.als` 파일이 함께 만들어집니다.

**이 폴더가 가장 중요합니다.**
프로젝트를 배포할 때는 `.als` 파일만 따로 보내는 것이 아니라, **해당 폴더 전체를 압축해 전송**해야 합니다.

![프로젝트 폴더/als](/images/tutorial/makeproject/noob/als.png)

다시 Live로 돌아와 `Tab` 키를 눌러 Arrangement 뷰로 전환합니다.
기본으로 트랙 4개가 자동 생성되는데, MIDI 2개와 Audio 2개입니다.

![Arrangement 기본 트랙](/images/tutorial/makeproject/noob/live-gui1.png)

### 오디오 트랙 설정

MIDI 트랙 중 하나의 이름을 `오디오`로 바꿉니다.

![트랙 이름 변경](/images/tutorial/makeproject/noob/rename.gif)

그다음 좌측 브라우저 패널의 `Instruments(악기)` 분류에서 `Instrument Rack`을 찾아 `오디오` 트랙의 디바이스 뷰로 드래그해 넣습니다.

![Instrument Rack 삽입](/images/tutorial/makeproject/noob/instrument-rack.gif)

`Macro` 목록과 `Chain` 목록을 아래 그림처럼 표시합니다.

![Macro/Chain 표시](/images/tutorial/makeproject/noob/instrument-rack2.gif)

그다음 `Instrument Rack` **내부**로 `Drum Rack`을 드래그해 넣습니다(반드시 내부).

![Drum Rack 삽입](/images/tutorial/makeproject/noob/drum-rack.gif)

이후 `Drum Rack`을 7번 복제해서 총 8개의 `Drum Rack`을 만듭니다.
`Drum Rack` 1개가 1페이지를 의미하며, 8개면 8페이지입니다. 더 많은 페이지가 필요하면 `Drum Rack`을 더 추가하면 됩니다.

![Drum Rack 복제](/images/tutorial/makeproject/noob/drum-rack2.gif)

이제 `Chain Selector`를 엽니다.

![Chain Selector](/images/tutorial/makeproject/noob/chain.png)

각 Rack 뒤에는 인디케이터가 있으며, 상단의 파란색 바가 아래 인디케이터를 가리키면 해당 Rack이 트리거됩니다.
현재는 모든 인디케이터가 일렬로 놓여 있어 Rack이 모두 동시에 트리거되는데, 이는 우리가 원하는 동작이 아닙니다.

![전체 동시 트리거 상태](/images/tutorial/makeproject/noob/chain2.png)

따라서 인디케이터를 아래 그림처럼 계단 형태로 아래쪽으로 배치해야 합니다.
페이지 전환 시에는 상단의 파란색 바를 제어하게 되며, 바가 몇 번째 칸에 위치하느냐에 따라 몇 페이지의 내용을 트리거할지가 결정됩니다.

![Chain 계단 배치](/images/tutorial/makeproject/noob/chain3.gif)

이제 파란색 바를 우클릭하고 `Macro 1에 매핑`을 선택합니다.
그러면 파란색 바 제어가 `Macro 1`에 연결되며, `Macro 1`을 돌려 파란색 바를 움직여 페이지를 제어할 수 있습니다.

![Macro 매핑](/images/tutorial/makeproject/noob/map-to-macro.gif)

마지막으로 트랙의 입력 장치를 런치패드로 바꾸면 됩니다.

![입력 장치 설정](/images/tutorial/makeproject/noob/set-proj.jpg)

여기까지 하면 오디오 트랙 설정이 끝납니다.

### 라이트 트랙 설정

남은 MIDI 트랙 하나의 이름을 `라이트`로 바꿉니다.
좌측 브라우저 패널의 `MIDI Effects(미디 효과)` 분류에서 `MIDI Effect Rack`을 찾아 디바이스 뷰로 드래그해 넣습니다.

![MIDI Effect Rack 삽입](/images/tutorial/makeproject/noob/midi-effect-rack.gif)

이후 오디오 트랙에서 했던 작업을 동일하게 반복하되, 내부에 넣는 것을 `MIDI Effect Rack`으로 바꿔 진행합니다.
즉, `Macro`/`Chain` 목록을 표시하고, 내부에 `MIDI Effect Rack`을 하나 더 넣은 뒤 7번 복제하여 총 8개를 만들고, `Chain Selector` 인디케이터도 동일하게 계단 형태로 배치합니다.

![라이트 Rack 구성](/images/tutorial/makeproject/noob/midi-effect-rack2.gif)

그다음 트랙의 입력 장치를 런치패드로, 출력 장치를 런치패드로 설정하고, 채널을 본인 장치에 맞게 지정합니다.
이후 `Ctrl`을 누른 채로 여러 트랙을 선택해 `Arm(예비 녹음)`(빨간 버튼)을 켭니다.

`Ctrl`을 누르지 않으면 한 트랙에만 `Arm`을 켤 수 있으며, `Arm`이 꺼진 트랙은 런치패드 신호를 잡지 못합니다.

![라이트 트랙 I/O 및 Arm](/images/tutorial/makeproject/noob/light-rack.jpg)

여기까지 하면 라이트 트랙 설정이 끝납니다.

---

## 오디오 처리

### 프로젝트 BPM 설정 및 Warp 끄기

준비한 곡을 Live의 비어 있는 Audio 트랙(아래쪽의 Audio 트랙 2개 중 하나)에 드래그해 넣습니다.
Live가 자동으로 분석을 수행하며, 분석 진행 상황은 프로그램 우하단에 표시됩니다.

![오디오 가져오기](/images/tutorial/makeproject/noob/import-audio.gif)

분석이 끝나면 몇 가지를 확인해야 합니다.
먼저 오디오의 제목 바 영역을 더블클릭합니다. 파형 영역이 아니라 **제목 바**입니다.
그러면 `Clip` 편집기 화면이 열립니다.

![Clip 편집기](/images/tutorial/makeproject/noob/clip-editor.gif)

여기서 곡의 BPM을 확인합니다.
BPM은 Beats Per Minute(분당 박자 수)로, 쉽게 말해 곡의 속도입니다.
Live가 먼저 BPM을 자동 계산해 주는데, 맞을 때도 있고 틀릴 때도 있습니다. 참고는 하되 그대로 믿지는 마세요.

Live가 계산을 끝낸 뒤에는 음악 데이터베이스와 비교해 확인할 수 있습니다.
제가 자주 쓰는 BPM 데이터베이스는 TuneBat입니다: [접속](https://tunebat.com/)

예를 들어 여기서 계산된 BPM이 아래와 같다고 하겠습니다.

![계산된 BPM](/images/tutorial/makeproject/noob/bpm.png)

정상이라면 계산된 값을 반올림해 정수로 만든 뒤, Live 상단의 프로젝트 BPM에 입력하면 됩니다.

![프로젝트 BPM 설정](/images/tutorial/makeproject/noob/set-bpm.png)

하지만 여기서는 Live 계산이 틀렸고, 오차도 꽤 큽니다. 이 곡의 BPM은 140입니다.

![정확한 BPM](/images/tutorial/makeproject/noob/correct-bpm.png)

일반적으로 데이터베이스 값은 틀리지 않으므로, 데이터베이스 값을 기준으로 입력합니다.

다만 이 데이터베이스는 Spotify, Apple Music을 기준으로 하고, 국내 서비스(예: 네이버뮤직, QQ 음악 등)를 기준으로 하지는 않습니다.
Spotify에 없는 곡이라면 이 데이터베이스에도 없는 경우가 많습니다. 이때는 다른 소프트웨어로 BPM을 측정할 수 있습니다.
예를 들어 Mixmeister BPM Analyzer를 쓰거나, TuneBat의 온라인 BPM 측정기를 사용할 수도 있습니다. 저는 FL Studio로 BPM을 재는 경우도 많습니다.

완전히 정확한 측정 도구는 없습니다. 대부분 평균값을 내는 방식이기 때문에, 곡 중간에 템포 변속이 있으면 정확도가 떨어집니다.
진짜 값은 제작자나 데이터베이스만 알 수 있고, 결국에는 많이 듣고 대략적인 BPM을 추정해가며 대입하는 방법(예: 저처럼)으로 맞추는 경우도 생깁니다.

이제 오디오의 `Warp` 처리를 꺼야 합니다. 토글은 아래 위치에 있습니다.
`Warp`가 켜져 있으면 불러온 오디오가 프로젝트 BPM 기준으로 늘어나거나 줄어드는 변속 처리를 받는데, 우리는 이를 원하지 않습니다.

설정이 끝나면 우하단 버튼으로 디바이스 뷰/Clip 편집기 뷰를 전환할 수 있고, 단축키는 `Shift+Tab`입니다.

![Warp 끄기](/images/tutorial/makeproject/noob/warp.png)

### 박자 맞추기

제작 과정에서 박자 맞추기는 매우 중요합니다.
곡과 박자선(그리드)이 맞지 않으면 슬라이스 작업이 매우 고됩니다.

먼저 아래 위치에서 메트로놈을 켭니다.
메트로놈을 켜고 재생하면 Live가 현재 BPM과 박자에 맞춰 클릭 소리를 내어 박자 찾기를 도와줍니다.

![메트로놈](/images/tutorial/makeproject/noob/tempo.png)

이제 곡의 드롭(일명 하이라이트/클라이맥스) 구간으로 이동합니다.
드롭 구간의 리듬을 듣고, 드롭 첫 박을 찾습니다. 전자음악에서는 보통 잠깐 쉬었다가 강하게 킥이 들어오고 여러 신스가 함께 들어오는 경우가 많습니다.
그 킥 소리를 찾아 해당 위치를 지정하면 됩니다.

`Ctrl + 마우스 휠`로 확대해 파형을 보면서 귀로 찾으면 됩니다. 찾았다면 좌클릭으로 위치를 잡고, 우클릭해 잘라냅니다.

![오디오 자르기](/images/tutorial/makeproject/noob/audio-slip.png)

이제 화면을 최대한 축소해 보면, 어둡고 밝은 구간으로 나뉜 영역이 보일 것입니다.
우리는 비교적 뒤쪽의 구간을 하나 골라, 잘라낸 클립을 구간과 구간 사이의 경계선에 맞춰 이동합니다(아래 이미지 참고).

![경계선에 맞추기](/images/tutorial/makeproject/noob/audio2.png)

그다음 잘라낸 지점 앞쪽의 불필요한 오디오는 삭제합니다.
이제 뒤쪽 클립의 좌상단으로 마우스를 가져갔을 때 커서가 아래와 같은 형태로 바뀌면, 드래그로 전체 길이를 다시 늘려 원본 전체를 꺼내면 됩니다. 이로써 박자 맞추기가 완료됩니다.

![클립 모서리 커서](/images/tutorial/makeproject/noob/clip-corner.png)
![클립 늘리기](/images/tutorial/makeproject/noob/clip-corner.gif)

만약 오디오를 드래그할 때 좌측 경계에 막힌다면, 선택한 구간이 아직 충분히 뒤쪽이 아니라는 뜻입니다. 되돌린 뒤 조금 더 뒤로 옮겨 다시 시도하세요.

## 오디오 트랙 제작

### 오디오 슬라이스

이제 곡을 들으면서 자르기를 시작합니다.
여기서는 일단 드롭 구간으로 바로 이동해, 짧은 구간을 먼저 만들어 보면서 감을 잡아도 됩니다.

화면을 확대해 드롭 구간을 찾고, 일정한 리듬에 맞춰 오디오를 잘라냅니다.
자르고 싶은 위치를 클릭해 커서가 강조된 상태에서 우클릭해 `자르기`를 선택하면 됩니다.
이 작업은 단축키 `Ctrl+E`/`Command+E`를 사용하는 것을 권합니다. 이런 식으로 반복해서 오디오를 잘라냅니다.

![오디오 슬라이스](/images/tutorial/makeproject/noob/slip-audio.gif)

### 슬라이스 재생 키 배치

자르기가 끝나면, 앞에서 만든 MIDI 오디오 트랙으로 돌아와 디바이스 뷰에서 `Drum Rack`을 찾습니다.
이제 잘라낸 오디오를 `Drum Rack`에 드래그해 넣기만 하면 되는데, 키 배치를 어떻게 하느냐가 문제입니다.

실제로 `Drum Rack`의 각 칸과 런치패드의 각 키는 1:1로 대응합니다.
런치패드에서 특정 키를 누르고 있으면 `Drum Rack`에서도 해당 칸이 하이라이트됩니다.
한 번에 16개 키만 보이므로, 좌측에서 드래그해 표시 구간을 바꿀 수 있습니다.

원하는 키에 대응하는 칸을 찾았으면, 오디오 슬라이스를 해당 칸에 드래그해 넣습니다.
그러면 우측에 해당 샘플의 편집기가 함께 열리며, 이후 해당 키를 누르면 소리가 납니다.

![Drum Rack 배치](/images/tutorial/makeproject/noob/drum-rack.gif)

### 슬라이스 파라미터 조정

슬라이스를 넣었다면 몇 가지 설정을 조정해야 합니다.
먼저 불러온 샘플이 `1-Shot` 모드인지 확인합니다. `1-Shot`은 단일 오디오 조각 재생에 특화되어 있어 설정이 비교적 단순합니다.
`Classic`은 제작/다성 연주 등을 위한 기능이 많아 복잡하고, 패드 연주 용도에는 적합하지 않습니다.

그다음 `Snap` 모드를 끕니다.
이 기능은 슬라이스 끝에 아주 짧은 공백을 남겨, 오디오가 몇 ms 빨리 끝난 것처럼 느껴지게 만들 수 있습니다. 그 결과 다음 슬라이스로 넘어갈 때 박자에 맞춰 눌렀는데도 부자연스럽게 끊기는 느낌이 날 수 있습니다(아래 이미지 참고).

![Snap 끄기](/images/tutorial/makeproject/noob/snap.png)

또한 `Fade Out`을 0으로 설정합니다. `Fade Out`은 슬라이스 끝에 페이드 아웃을 주는 기능이지만, 여기서는 필요하지 않습니다.
그리고 `Vol<Vel` 값이 45% 또는 35%인지 확인해, 모든 슬라이스가 동일한 값이 되도록 맞춥니다. 값이 제각각이면 소리 크기가 들쭉날쭉해집니다.

조정이 끝나면 아래처럼 보일 것입니다.

![Simpler 설정](/images/tutorial/makeproject/noob/simpler.png)

### 종합

위에서 설명한 과정을 종합해, 곡의 짧은 구간을 실제로 끝까지 잘라 배치해 보세요.

## 라이트 제작 트랙

### 라이트 생성

라이트를 그리기 위한 새 MIDI 트랙을 하나 만듭니다.
이 트랙이 곧 라이트 제작 트랙이며, 앞에서 설정한 라이트 트랙과 동일한 방식으로 입력/출력을 설정합니다(아래 이미지 참고).

![라이트 제작 트랙](/images/tutorial/makeproject/noob/light-create.png)

이제 라이트를 만들고 싶은 오디오 구간을 찾고, 그 구간에 맞는 라이트 제작 트랙의 셀에서 영역을 드래그해 선택합니다.
그다음 우클릭하여 `MIDI Clip 만들기`를 선택합니다.

![MIDI Clip 만들기](/images/tutorial/makeproject/noob/create-midi-clip.gif)

그러면 Live의 피아노 롤(롤 에디터)이 열리는데, 이 창이 라이트 제작 창입니다.

![피아노 롤](/images/tutorial/makeproject/noob/piano-roll.png)

런치패드 라이트를 그리는 방식은 애니메이션에 가깝습니다.
프레임 단위로 라이트 흐름을 하나씩 그린 뒤, 전체를 재생해 움직이는 효과를 만듭니다.

예를 들어 좌하단에서 우상단으로 이동하는, 화면 전체를 덮는 라이트를 만든다고 가정해 보겠습니다.
먼저 피아노 롤에서 재생 커서를 가장 처음으로 옮긴 뒤 클릭해 위치를 잡습니다.

![커서 위치 지정](/images/tutorial/makeproject/noob/set-1-sec.gif)

그다음 피아노 건반 맨 위쪽에 있는 헤드폰 모양 아이콘을 켭니다. 이것이 피아노 롤의 미리보기 기능이며, 켜면 파란색으로 점등됩니다.

![피아노 롤 미리보기](/images/tutorial/makeproject/noob/pianoroll-preview.png)

이제 라이트 트랙의 예비 모니터(Arm/모니터)가 켜져 있는지 확인합니다.

![라이트 트랙 모니터](/images/tutorial/makeproject/noob/light-monitor.png)

준비가 모두 끝났다면, 런치패드에서 아무 키나 눌러 보세요. 피아노 롤에서도 대응하는 건반이 함께 점등되며, 런치패드 키와 피아노 롤 건반은 1:1로 연결되어 있습니다.

![키 대응 확인](/images/tutorial/makeproject/noob/piano-button-preview.gif)

이제 런치패드 좌하단 키를 누른 채로, 키보드의 `→`(오른쪽 화살표)를 누릅니다.
그러면 에디터에 MIDI 노트가 하나 생성되는데, 이것이 방금 그린 라이트입니다. `Space`로 재생해 확인할 수 있습니다.

이후에는 애니메이션을 그리듯이, 노트 뒤에 하나씩 계속 그려 나가면 됩니다.
런치패드 키를 누른 채로 `→`를 눌러 찍어 나가고, 팔이 닿지 않으면 절반쯤 그린 뒤 `←`로 돌아가 이어서 그리면 됩니다. 전체 과정은 아래와 같습니다.

![라이트 그리기](/images/tutorial/makeproject/noob/draw-light.gif)

그린 내용이 너무 커서 작업 공간이 부족하다면, 피아노 롤에서 우클릭한 뒤 자동 그리드를 `좁게`로 바꿀 수 있습니다.

모두 그린 뒤 `Space`로 재생하면 아래와 같은 효과가 나옵니다.

![라이트 결과](/images/tutorial/makeproject/noob/light-final-preview.gif)

### 라이트 색상 조정

라이트를 그린 뒤 보면 기본 색상이 보기 좋지 않을 수 있습니다. 이를 바꾸는 방법을 알아보겠습니다.

여기서 알아야 할 개념이 하나 있습니다.
소프트웨어 관점에서 런치패드의 라이트는 곧 키 입력의 `Velocity(세기)` 값이며, Live는 최대 127까지의 세기 값을 감지합니다.
즉, 선택 가능한 색상이 총 127개입니다.

일반적으로 기본으로 보이는 주황색은 최대 세기값, 즉 127입니다.
아래는 127색 전체 미리보기입니다. 좌하단 첫 번째 검정은 0으로, 자리 표시 값이라 사용할 수 없습니다. 진한 회색부터 1입니다.
또한 4열씩 한 묶음이며, 0부터 시작해 4개마다 한 줄씩 위로 올라가는 방식으로 계산됩니다.

![127색 팔레트](/images/tutorial/makeproject/noob/default-palette.png)

예를 들어 흰색으로 바꾸고 싶다면, 피아노 롤로 돌아가 현재 라이트를 드래그해 선택합니다.

- Live 11 이상인 경우:
  - 키보드에서 숫자를 직접 입력하면 라이트 색을 바꿀 수 있습니다.
  - 예: 흰색으로 바꾸려면 `3` 입력

![Live 11 이상 색상 변경](/images/tutorial/makeproject/noob/change-colour-l11.gif)

- Live 10 이하인 경우:
  - `Alt` 키를 누른 채로 노트에 마우스를 올리고, 아래로 드래그해 값을 `3`으로 맞춥니다.
  - Live 11 사용자는 이 방법을 권하지 않습니다(버그가 있습니다).

![색상 변경](/images/tutorial/makeproject/noob/change-colour.gif)

라이트 미리보기:

![색상 변경 미리보기](/images/tutorial/makeproject/noob/change-colour-prev.gif)

### 라이트 내보내기

이제 라이트를 하나 만들었으니, 런치패드에서 재생할 수 있도록 내보내야 합니다.
방금 만든 라이트 `Clip`을 우클릭한 뒤 `MIDI Clip 내보내기`를 선택합니다.

프로젝트 폴더 안에 `Lights`라는 폴더를 하나 만들어야 하며, 폴더명은 중국어를 쓰면 안 됩니다.
그리고 라이트 파일은 반드시 **현재 프로젝트 폴더 안**으로 내보내야 합니다. 다른 위치로 내보내면 누락될 수 있습니다.
내보낸 뒤 폴더에 `.mid` 확장자의 MIDI 파일이 생기면 정상입니다.

![MIDI 내보내기](/images/tutorial/makeproject/noob/export-midi.gif)

### 라이트 로드

여기서는 Max 플러그인 `MIDI Extension`이 필요합니다.
여기서 [다운로드](/download/amxd)한 뒤 지정된 위치에 설치합니다.

그다음 트랙 화면으로 돌아가, 앞에서 설정해 둔 라이트 트랙의 `MIDI Effect Rack`에 `MIDI Extension` 플러그인을 넣습니다. 아래와 같은 모습일 것입니다.

![MIDI Extension](/images/tutorial/makeproject/noob/midiext.gif)

이제 방금 라이트를 내보낸 `Lights` 폴더를 열고, 라이트 파일을 현재 `MIDI Extension` 위로 드래그해 넣습니다.

![라이트 가져오기](/images/tutorial/makeproject/noob/import-light.gif)

그다음 Key 선택기를 열고, 슬라이스를 설정한 키를 길게 누른 상태에서 `MIDIext` 뒤쪽의 긴 초록 막대 부분을 더블클릭합니다.
그러면 트리거 키 범위가 방금 누른 키로 자동 제한됩니다. 이 작업을 하지 않으면 모든 키가 방금 만든 라이트를 트리거하게 됩니다.

![키 제한](/images/tutorial/makeproject/noob/set-button.gif)

### 종합

이제 같은 방식으로 키 배치를 슬라이스와 일치시키고, 각 슬라이스에 맞는 라이트를 구상해 그린 뒤 설정하면 됩니다.
그리는 방법은 이미 설명했으니, 남은 것은 직접 만들어 보는 과정입니다.

## 축하합니다

이제 프로젝트를 만들 수 있게 되었습니다.
