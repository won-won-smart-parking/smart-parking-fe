# Git Flow 브랜치 전략 방법

![git-flow](/assets/images/docs/git-flow.webp)

Git Flow 브랜치 전략 방법이란, 수많은 가지들이 뻗어나가는 Git 브랜치 구조를 main, release, dev, feature, hotfix 브랜치로 관리하는 방법을 의미한다.

- main 브랜치: Product 환경에서 배포되는 최종 안정 코드가 모이는 브랜치
- release 브랜치: 배포 직전 단게에서 최종 테스트 및 안전성 검증을 위한 코드가 모이는 브랜치
- dev 브랜치: Feature 브랜치들이 병합되는 통합 개발 브랜치
- feature 브랜치: 개발자가 개별 기능을 구현하기 위해 생성하는 작업용 브랜치
- hotfix 브랜치: main 브랜치에서 발생한 긴급 문제를 빠르게 수정하기 위한 브랜치