---
title: "Ableton Live 완전 삭제 및 잔여 파일 제거"
description: "Ableton Live 설치/인증 문제나 잦은 크래시가 있을 때, 완전 초기화를 위한 제거 절차를 정리합니다."
---

## 서문

이 문서는 Ableton Live가 설치되지 않거나, 인증이 되지 않거나, 이유 없이 계속 크래시가 발생해 완전 초기화를 하고 싶은 경우를 대상으로 합니다. 위와 같은 문제가 있다면 아래 방법을 시도해 보세요.

:::caution[경고]
여러 단계에서 시스템의 핵심 경로를 다루므로, 경로를 정확히 확인해 오삭제를 피하세요. 잘못 삭제하면 소프트웨어나 시스템이 불안정해질 수 있습니다.

이 작업을 수행하면 여러분이 추가한 모든 Max For Live 플러그인, 이펙트 프리셋, 그리고 MIDI Extension 1.0의 라이트 파일이 삭제됩니다. 반드시 백업하세요.

이미 안내했습니다. 실수로 삭제해 백업이 없어서 파일이 유실되거나 시스템이 망가져도 책임지지 않습니다.
:::

## 1. Ableton Live 제거

제어판에서 Ableton Live를 제거하면 됩니다.

![img](/images/tutorial/resetlive/uninstall.png)

:::note[주의]
이 단계에서는 MIDI Extension 1.0에서 수동으로 라이트 프로젝트를 로드할 때 사용되는 라이트 패키지 파일이 삭제됩니다.
:::

## 2. 설정 및 인증 파일 삭제

키보드에서 `Win + R`을 눌러 실행 창을 열고, `"%APPDATA%"`를 입력한 뒤 Enter를 누릅니다.

![img](/images/tutorial/resetlive/run.png)

그다음 `"Ableton"` 폴더를 삭제합니다.

:::note[주의]
이 단계에서는 설치되어 있던 Live의 모든 환경설정과 인증 정보, 그리고 모든 크래시 로그가 삭제됩니다.
:::

## 3. 기타 잔여 파일 삭제

### Push 3 드라이버

`C:\\Program Files` 아래의 `"Ableton"` 폴더를 삭제합니다.

### Live 설치 디렉터리

`Win + R`로 실행 창을 열고, `"%ProgramData%"` 아래의 `"Ableton"` 폴더를 삭제합니다.

:::note[주의]
설치 위치를 변경했다면, 직접 설치된 위치를 찾아 삭제해야 합니다.
:::

### Live 데이터베이스 및 오디오 캐시

`Win + R`로 실행 창을 열고, `"%LocalAppdata%"` 아래의 `"Ableton"` 폴더를 삭제합니다.

### Live User Library(사용자 라이브러리)

`Win + R`로 실행 창을 열고, `"%USERPROFILE%/Documents"` 아래의 `"Ableton"` 폴더를 삭제합니다.

:::note[주의]
이 단계에서는 여러분이 추가한 모든 Max For Live 플러그인과 직접 만든 이펙트 프리셋이 삭제됩니다. 반드시 백업하세요.
:::

