---
title: "브릭(벽돌) 상태인가요?"
description: "런치패드 프로가 Bootloader로 진입하지 못하는 등 브릭 상태일 때, ST-LINK로 복구하는 절차를 정리합니다."
---

:::note[관련 정보]
다음 문서를 바탕으로 옮긴 내용입니다: [mat1jaczyyy](https://github.com/mat1jaczyyy/lpp-performance-cfw/blob/master/unbrick.md)  
Gemini+ 교정
:::

런치패드는 보통 펌웨어를 플래시했다고 해서 바로 브릭이 되지는 않습니다. 대개 개발 과정에서 저수준(하위 레벨) 변경 작업을 하다가 브릭이 발생합니다. Bootloader(부트로더) 모드로 부팅할 수 없는 것이 브릭의 특징입니다.

만약 단순히 펌웨어로 부팅이 되지 않는 정도라면, 펌웨어를 다시 플래시하면 됩니다. 반대로 Bootloader로 진입할 수 없을 때에만 언브릭 작업이 필요합니다. Bootloader로 진입만 된다면 런치패드는 정상이라고 볼 수 있습니다.

:::caution[경고]
자신이 무엇을 하고 있는지 확실히 알고 있지 않다면, 아래 작업을 수행하지 마세요.
:::

## 필요한 도구

- 브릭 상태의 런치패드 프로 1대
- ST-LINK V2(아무 제품)
- STM32 ST-LINK Utility: [다운로드](/resources/unbrick/STM32%20ST-LINK%20Utility%20v4.4.0%20setup.exe)
- 암-수 점퍼선 4개
- 런치패드 프로 내부 메모리 저수준 백업 파일 1개: [다운로드](https://cdn.discordapp.com/attachments/636554539096473600/826560546890579998/pro_backup.bin) (현재는 사용할 수 없으니 다른 곳에서 구해야 합니다)

## 분해

런치패드 프로를 분해하되, 전원 관리 모듈만 분리합니다. 전원 버튼을 잃어버리지 않도록 주의하세요.  
CPU가 노출되면 아래 지점을 ST-LINK에 연결합니다.  
SWDIO는 계속 꽂아 두기보다, 직접 연결 상태를 유지해야 할 수도 있습니다.

![ST-LINK 연결 예시](/images/unbrick/1.png)

## 메모리 다시 플래시하기

ST-LINK 유틸리티를 실행하고, ST-LINK 펌웨어가 최신인지 확인합니다.

![ST-LINK Firmware Update](/images/unbrick/2.png)

브릭 상태의 런치패드 프로에 연결합니다.

![A trashed bootloader](/images/unbrick/3.png)

메모리 백업 파일을 플래시하고 검증합니다.

![Fixing it...](/images/unbrick/4.png)

플래시가 끝나면 ST-LINK 연결을 해제합니다. 런치패드는 바로 Vegas 모드로 부팅될 것입니다.

![Fixed!](/images/unbrick/5.png)

재조립도 즐겁게 하세요 :)

