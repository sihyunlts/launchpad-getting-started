---
title: "Ableton | 런치패드 포트 설정 상세 안내"
description: "Ableton Live 환경설정(MIDI)에서 런치패드 포트를 올바르게 활성화/선택하는 방법을 정리합니다."
---

환경설정 페이지의 `MIDI` 탭은 MIDI 장치 포트를 설정하는 곳입니다. 런치패드를 포함한 모든 MIDI 장치는 여기서 활성화해야 Ableton Live를 제어할 수 있습니다.

화면 설명:

| 컨트롤 서피스 | 입력 | 출력 |
| --- | --- | --- |
| 선택한 항목은 Live가 장치를 구분할 때 사용합니다. 다른 장치를 선택하면 그 장치의 컨트롤 서피스 화면이 현재 장치에 적용됩니다. | MIDI 장치의 입력 포트를 설정합니다. | MIDI 장치의 출력 포트를 설정합니다. |

:::caution[주의]
Novation은 Windows에서 장치마다 별도의 이름으로 표시되도록 개별 대응을 하지 않았습니다. 그래서 Ableton Live에서 런치패드가 올바른 이름으로 표시되지 않습니다. 메인 포트를 제외한 나머지 포트는 `MIDIIN/MIDIOUT` 같은 형태로 대체 표시됩니다. macOS에서는 공식으로 지정된 이름이 표시되며, 각 포트의 용도는 아래에서 표기했습니다.

장치 이름 앞에 `1-`, `2-` 같은 접두사가 붙어 있다면 무시해도 됩니다. 이는 Windows 자체 표기이며 사용에는 영향이 없습니다.

이 문서는 드라이버 설치 후 표시되는 이름을 기준으로 정리했습니다. 드라이버를 설치하지 않았다면 `Launchpad Port #숫자#`처럼 표시됩니다.
:::

## 설정 방법

1. `컨트롤 서피스`에서 본인의 장치를 선택합니다. `Launchkey`로 선택하지 않도록 주의하세요.
1. `입력`에서 포트를 선택합니다(선택 기준은 아래 참고).
1. `출력`에서 포트를 선택합니다(선택 기준은 아래 참고).
1. 런치패드 포트의 `Track`과 `Remote`(외부 컨트롤)를 활성화합니다.

![img](/images/tutorial/sa-midi/preference-midiports.jpg)

:::note[관련 정보]
`Track`과 `Remote`를 켜면, 해당 장치가 트랙으로 컨트롤 신호를 보내 트랙에 영향을 줄 수 있다는 뜻입니다. 이를 켜지 않으면 MIDI 장치에서 어떤 조작을 하더라도 Live가 반응하지 않습니다.
:::

:::caution[주의]
Microsoft GS Wavetable Synth는 어떤 MIDI 장치에도 속하지 않습니다. Windows에만 있는 내장 신시사이저이며, 구시대 레거시 코드의 유산에 가깝습니다. 건드리지 마세요.
:::

## 런치패드 MK3(3세대)

### 런치패드 X(MK3)

| 포트 이름 | 정식 이름 | 용도 |
| --- | --- | --- |
| `LPX MIDI` | `Launchpad X (LPX DAW Out)` | 컨트롤 서피스(인터페이스) 전용 포트이며, 다른 용도로는 사용할 수 없습니다. |
| `MIDIIN/MIDIOUT2 (LPX MIDI)` | `Launchpad X (LPX MIDI Out)` | 커스텀 모드. 모든 MIDI 데이터를 받을 수 있어 연주에 사용합니다. |

### 런치패드 미니 MK3

| 포트 이름 | 정식 이름 | 용도 |
| --- | --- | --- |
| `LPMiniMK3 MIDI` | `Launchpad Mini MK3 (LPProMK3 DAW Out)` | 컨트롤 서피스(인터페이스) 전용 포트이며, 다른 용도로는 사용할 수 없습니다. |
| `MIDIIN/MIDIOUT2 (LPMiniMK3 MIDI)` | `Launchpad Mini MK3 (LPProMK3 MIDI Out)` | 커스텀 모드. 모든 MIDI 데이터를 받을 수 있어 연주에 사용합니다. |

### 런치패드 프로 MK3

| 포트 이름 | 정식 이름 | 용도 |
| --- | --- | --- |
| `LPProMK3 MIDI` | `Launchpad Pro MK3 (LPProMK3 MIDI)` | 커스텀 모드. 모든 MIDI 데이터를 받을 수 있어 연주에 사용합니다. |
| `MIDIIN/MIDIOUT2 (LPProMK3 MIDI)` | `Launchpad Pro MK3 (LPProMK3 DIN)` | 잘 모르겠습니다. |
| `MIDIIN/MIDIOUT3 (LPProMK3 MIDI)` | `Launchpad Pro MK3 (LPProMK3 DAW)` | 컨트롤 서피스(인터페이스) 전용 포트이며, 다른 용도로는 사용할 수 없습니다. |

## 런치패드 MK2(2세대)

### 런치패드 프로 MK1

| 포트 이름 | 정식 이름 | 용도 |
| --- | --- | --- |
| `Launchpad Pro` | `Launchpad Pro (Live Port)` | 연주 및 컨트롤 서피스 설정에 사용합니다. |
| `MIDIIN/MIDIOUT2 (Launchpad Pro)` | `Launchpad Pro (Standalone Port)` | 컨트롤 서피스를 설정하지 않을 때 사용하지만, 키 레이아웃이 달라 의도는 확실하지 않습니다. |
| `MIDIIN/MIDIOUT3 (Launchpad Pro)` | `Launchpad Pro (MIDI Port)` | `Programmer Mode`에서 사용하는 포트입니다. |

### 런치패드 프로 MK1 CFW

| 포트 이름 | 정식 이름 | 용도 |
| --- | --- | --- |
| `Launchpad Open` | `Launchpad Open (Standalone Port)` | `Performance Mode`. 연주용이며, `User Mode`의 최적화 업그레이드 버전입니다. |
| `MIDIIN/MIDIOUT2 (Launchpad Open)` | `Launchpad Open (MIDI Port)` | 순정 펌웨어의 `Live Port`와 동일합니다. 공식 펌웨어의 `User Mode`를 호출합니다. |

### 런치패드 MK2(RGB)

| 포트 이름 | 용도 |
| --- | --- |
| `Launchpad MK2` | 연주 및 컨트롤 서피스 설정에 사용합니다. |

### 런치패드 미니 MK2

| 포트 이름 | 용도 |
| --- | --- |
| `Launchpad MINI` | 연주 및 컨트롤 서피스 설정에 사용합니다. |

*장치가 없어 확실하지 않습니다.

## Ableton Push 2

*내용이 확실하지 않으니 참고용으로만 보세요.

| 포트 이름 | 정식 이름 |
| --- | --- |
| `Ableton Push 2` | `Ableton Push 2 (Live Port)` |
| `Ableton Push 2 (Port 2)` | `Ableton Push 2 (User Port)` |

:::caution[주의]
Ableton Push 2는 USB 드라이버가 없고, Windows 범용 MIDI 드라이버만 사용합니다. 따라서 여러 소프트웨어에서 동시에 사용할 수 없으며, 포트가 점유되었다는 메시지가 뜰 수 있습니다.
:::

