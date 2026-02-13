---
title: "Ableton Live에서 비디오 가져오기"
description: "Ableton Live에서 비디오를 가져오기 위한 코덱 설치 방법을 안내합니다."
---

## 서문

Ableton Live는 기본 상태로는 비디오를 직접 가져올 수 없습니다. 오디오/비디오 코덱이 내장되어 있지 않기 때문이며, 코덱을 내려받아 설치하면 비디오를 가져올 수 있습니다.  
Live 12에는 관련 코덱이 추가되어 있어 별도로 설치할 필요가 없습니다.

## 코덱 다운로드

Haali Media Splitter: [다운로드](https://haali.su/mkv/MatroskaSplitter.exe)

<details>
<summary>공식 안내</summary>

1. Haali Media Splitter는 현재 Windows에서 Live와 함께 사용할 수 있는 유일한 서드파티 코덱입니다. Live에서 비디오 문제가 발생하는 것을 방지하기 위해, 기존에 설치한 다른 코덱이 있다면 제거하고 Haali Media Splitter만 설치해 두세요.
1. 관리자 권한으로 Live를 실행하면 드래그 앤 드롭으로 가져오기를 사용할 수 없습니다.
1. 지원되는 비디오 형식은 `.mp4`, `.mov`뿐입니다. 다른 형식은 테스트하지 않았으나 동작할 수 있습니다. 형식이 지원되지 않는다면 Handbrake 같은 인코딩 소프트웨어로 변환하세요.
1. 가져온 비디오가 검은 화면으로 보인다면, 컴퓨터가 내장 그래픽 + 외장 그래픽(듀얼 GPU) 조합인지 확인하세요. 듀얼 GPU라면 Live를 내장 그래픽으로 실행해 문제를 분리해 보거나, 외장 그래픽 직결을 활성화해 보세요. 다중 모니터 환경도 이 문제를 유발할 수 있습니다.

</details>

