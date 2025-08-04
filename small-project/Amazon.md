AWS Cloud Practitioner 최종 요약 노트 (통합본)
도메인 1: 클라우드 개념 및 기술
클라우드 컴퓨팅 기본
클라우드 컴퓨팅이란?

인터넷을 통해 IT 리소스(컴퓨팅, 스토리지, 데이터베이스 등)를 온디맨드로 제공하고, 사용한 만큼만 비용을 지불하는 서비스입니다.

⭐ 클라우드 컴퓨팅의 6가지 이점

초기 비용(CapEx)을 가변 비용(OpEx)으로 전환: 대규모 하드웨어 구매 비용 없이 월 사용료만 지불합니다.

데이터 센터 운영 및 유지 관리 비용 절감: 물리적 서버 관리에 대한 부담이 없습니다.

용량 추정 불필요: 필요에 따라 리소스를 즉시 늘리거나 줄일 수 있습니다.

규모의 경제 활용: AWS가 대량으로 구매하여 얻는 비용 절감 효과를 고객이 누립니다.

속도 및 민첩성 향상: 몇 분 만에 새로운 서버를 생성하고 아이디어를 테스트할 수 있습니다.

몇 분 만에 전 세계에 배포: 글로벌 리전을 활용해 전 세계 사용자에게 서비스를 제공합니다.

탄력성 (Elasticity): 워크로드의 변화에 따라 필요한 IT 리소스를 동적으로 확보하고 더 이상 필요하지 않을 때 해제하는 클라우드의 능력입니다.

수직 및 수평 확장:

수직 확장 (Scaling Up): 인스턴스의 사양(CPU, RAM)을 높이는 방식.

수평 확장 (Scaling Out): 인스턴스의 개수를 늘리는 방식. Amazon EC2 Auto Scaling이 대표적인 수평 확장 서비스입니다.

AWS 글로벌 인프라
핵심 용어: AWS 인프라는 리전(Region), 가용 영역(Availability Zone), **엣지 로케이션(Edge Location)**으로 구성됩니다.

리전 (Region): AWS 서비스가 위치한 물리적인 지리적 영역 (예: 서울 ap-northeast-2).

⭐ 리전 선택 4가지 기준: 1. 데이터 거버넌스/법률, 2. 고객과의 근접성(지연 시간), 3. 서비스 가용성, 4. 요금.

가용 영역 (Availability Zone, AZ):

하나의 리전 내에 존재하는, 물리적으로 분리된 하나 이상의 데이터 센터. (리전은 AZ의 합집합)

고가용성(HA)을 위해 최소 2개 이상의 AZ에 리소스를 배포하는 것이 모범 사례입니다.

엣지 로케이션 (Edge Location):

Amazon CloudFront가 사용하는 전 세계 주요 도시의 CDN 캐시 서버.

사용자와 가까운 곳에 콘텐츠를 캐싱하여 데이터 전송 속도를 높입니다.

AWS 글로벌 엣지 네트워크: 전 세계에 분산된 데이터 센터 네트워크로, **Amazon CloudFront(CDN)**와 **Amazon Route 53(DNS)**가 이 네트워크를 사용하여 빠르고 안정적인 서비스를 제공합니다.

AWS Local Zones: 리전의 확장 개념으로, 지연 시간에 민감한 애플리케이션을 위해 컴퓨팅, 스토리지 등을 인구 밀집 지역에 더 가깝게 배치합니다.

AWS Wavelength: 5G 네트워크 엣지에 AWS 인프라를 내장하여 모바일 디바이스를 위한 초저지연 애플리케이션을 지원합니다.

프레임워크 및 마이그레이션
Well-Architected Framework의 6가지 핵심 원칙:

운영 우수성 (Operational Excellence)

보안 (Security)

안정성 (Reliability)

성능 효율성 (Performance Efficiency)

비용 최적화 (Cost Optimization)

지속 가능성 (Sustainability)

Cloud Adoption Framework (CAF)의 6가지 관점:

비즈니스 관점: Business, People, Governance

기술 관점: Platform, Security, Operations

⭐ 마이그레이션 전략 7R:

Retire (폐기): 더 이상 필요 없는 애플리케이션을 제거.

Retain (유지): 규제 등의 이유로 온프레미스에 그대로 둠.

Rehost (리호스트): "Lift & Shift". 코드 변경 없이 그대로 EC2로 이전. (시험에 가장 자주 언급됨)

Relocate (재배치): VMware 같은 가상머신을 통째로 클라우드로 이전.

Repurchase (재구매): 기존 라이선스를 버리고 SaaS 같은 다른 제품으로 전환.

Replatform (리플랫포밍): 핵심 구조는 유지하되 DB를 RDS로 바꾸는 등 일부만 클라우드 개선을 활용.

Refactor/Re-architect (리팩터링/재설계): 클라우드 네이티브 기능을 최대한 활용하기 위해 애플리케이션을 클라우드에서 재설계.

TCO (총 소유 비용): 온프레미스 인프라 운영과 AWS 클라우드 사용 비용을 비교 분석하는 재무 평가 도구.

도메인 2: 보안 및 규정 준수
⭐ 공동 책임 모델
AWS 책임 (Security OF the Cloud): 물리적 인프라, 하드웨어, 리전/AZ, Lambda의 기본 인프라 패치 등.

고객 책임 (Security IN the Cloud): 데이터 암호화, IAM 관리, OS 패치, 보안 그룹 설정, 네트워크 구성 등.

규정 준수 및 암호화
AWS Artifact: AWS의 각종 규정 준수 인증 보고서(ISO, PCI 등)를 제공하는 서비스.

암호화 옵션:

저장 중(At Rest) / 전송 중(In Transit) 암호화 모두 지원.

AWS KMS: 멀티테넌시 방식의 키 관리 서비스.

AWS CloudHSM: 단일 고객 전용 하드웨어 보안 모듈(HSM). 금융권 등 높은 수준의 규제가 필요할 때 사용.

보안 서비스
위협 탐지 서비스: Amazon GuardDuty

DDoS 방어 (무료 기본 제공): AWS Shield Standard

데이터 보안 및 PII(개인 식별 정보) 탐지: Amazon Macie

보안 모범 사례 검사 자동화: AWS Security Hub

AWS WAF: 웹 애플리케이션 방화벽. (SQL 인젝션 등 웹 공격 차단)

액세스 관리
⭐ AWS IAM (Identity and Access Management):

루트 사용자: 최초 생성 계정. MFA 설정 필수, 일상 작업에 사용 금지.

사용자/그룹/역할/정책: '누가, 무엇을, 어떻게' 할 수 있는지 제어.

최소 권한의 원칙: 필요한 최소한의 권한만 부여.

AWS IAM Identity Center (구 AWS SSO): 여러 AWS 계정에 대한 싱글 사인온(SSO) 및 중앙 집중식 액세스 관리 서비스.

AWS Marketplace: 타사 소프트웨어를 검색하고 구매할 수 있는 디지털 카탈로그.

도메인 3: 기술
핵심 서비스
관리형 서비스 vs 비관리형 서비스

관리형: AWS가 기본 인프라를 관리. (예: RDS, DynamoDB)

비관리형: 고객이 OS 및 애플리케이션을 직접 관리. (예: EC2)

서비스 범위:

가용 영역별 서비스: EC2 인스턴스, EBS 볼륨

리전별 서비스: Amazon S3, Amazon DynamoDB, IAM, EFS

컴퓨팅:

EC2: 가상 서버.

Lambda: 서버리스 컴퓨팅.

ECS/EKS/Fargate: 컨테이너 서비스.

스토리지:

⭐ EBS vs. 인스턴스 스토어: EBS는 영구 스토리지, 인스턴스 스토어는 임시 스토리지.

S3: 객체 스토리지.

EFS: Linux용 공유 파일 스토리지.

데이터베이스:

RDS: 관계형 데이터베이스(RDB) 관리형 서비스.

Aurora: RDS에서 선택 가능한 고성능 RDB 엔진.

DynamoDB: NoSQL 키-값 데이터베이스.

인메모리 DB: MemoryDB for Redis(데이터베이스용), ElastiCache(캐시용).

네트워크:

VPC: 가상 네트워크. (리전 당 기본 5개 생성 가능)

Direct Connect: 전용 사설 네트워크 연결.

하이브리드:

AWS Outposts: AWS 인프라를 온프레미스에서 사용.

⭐ AWS Storage Gateway: 온프레미스와 클라우드 스토리지를 연결. (파일/볼륨/테이프 게이트웨이)

메시징:

SNS: Push(푸시) 방식 알림 서비스.

SQS: Pull(폴링) 방식 메시지 대기열. (짧은/긴 폴링)

도메인 4: 결제 및 요금
요금 모델 및 관리
EC2 요금제: 온디맨드, 예약(RI)/Saving Plans, 스팟, 전용 호스트(라이선스용).

⭐ AWS Organizations:

통합 결제(Consolidated Billing): 모든 계정의 요금을 단일 청구서로 통합.

볼륨 할인: 조직 전체의 사용량을 합산하여 더 높은 할인 구간을 적용받아 비용 절감.

AWS Budgets: 예산을 설정하고 초과 시 알림을 받음.

AWS Cost Explorer: 과거와 현재 비용을 시각화하고 분석함.

지원
AWS 지원 옵션:

AWS Trusted Advisor: 5가지 영역에서 모범 사례를 점검하고 권장 사항을 제공.

AWS Health Dashboard / Health API: AWS 서비스의 상태 및 예정된 활동에 대한 정보를 제공.

⭐ AWS Support Plan:

Developer: 테스트용.

Business: 프로덕션용, 모든 Trusted Advisor 검사 항목 접근 가능.

Enterprise On-Ramp: 비즈니스 크리티컬용, 공유 TAM 풀에 접근. (3번째 플랜)

Enterprise: 미션 크리티컬용, 전담 TAM(Technical Account Manager) 제공.
