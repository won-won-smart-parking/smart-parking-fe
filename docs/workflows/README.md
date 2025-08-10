#  Workflows
 
> ⭐️ 개발 과정은 아래 표의 순서를 따라 진행하는 것을 권장합니다.

| 종류 | 설명 |
|--|--|
| [이슈 및 작업 관리 가이드](./issue_workflow.md) | 스크럼 작성부터 Github 이슈 + 프로젝트 관리까지 대한 내용을 작성한 문서입니다. |
| [로컬 환경 준비](./local_setup.md) | Smart Parking 프로젝트를 실행하기 위해 의존성 설치, 개발 서버 실행, 환경 변수 설정 등 로컬 개발 환경을 구성하는 방법을 안내하는 문서입니다. |
| [기능 개발 과정](./feature_workflow.md) | 각자가 맡은 기능 개발 과정의 흐름을 정리한 문서입니다. _(🙂‍↔️ 권장사항, 필수 아님)_ |

# 🤖 자동화 검사 & CI/CD 파이프라인

> 👍 자동화 검사는 다음 단계를 따릅니다:
> - commit-msg: 커밋 메시지가 규칙에 맞는지 검증하는 git-hook
> - pre-commit: 커밋 생성 직전에 실행되는 git-hook
> - pre-push: 원격 저장소로 반영(push)하기 직전에 실행되는 git-hook
> - pull-ci: Github Pull Request 생성 또는 업데이트 시 자동으로 실행되는 CI 검증

| 종류 | 설명 |
|--|--|
| [commit-msg](./commit-msg.md) | Smart Parking에 사용된 커밋 메시지 규칙 검증 git-hook에 대한 설명을 작성한 문서입니다. |
| [pre-commit](./pre-commit.md) | Smart Parking에 사용된 커밋 생성 직전에 실행되는 git-hook에 대한 설명을 작성한 문서입니다. |
| [pre-push](./pre-push.md) | Smart Parking에 사용된 원격 저장소로 반영(push)하기 직전에 실행되는 git-hook에 대한 설명을 작성한 문서입니다. |
| [pull-ci](./pull-ci.md) | Smart Parking에 사용된 Github Pull Request 생성 또는 업데이트 시 자동으로 실행되는 CI 검증 항목에 대한 설명을 작성한 문서입니다. |