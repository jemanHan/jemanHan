import {Title} from '../components'
import Card from './Card'

const myCard = {
  writer: {
    uuid: "user-123", // ✅ 이거 추가
    name: "Jeman Han",
    jobTitle: "Frontend Developer",
    email: "jeman@example.com",
    avatar: "https://placeimg.com/100/100/people"
  },
  image: "https://placeimg.com/640/480/tech",
  title: "내가 직접 입력한 카드 제목",
  paragraphs: "이것은 내가 CardContainer 안에서 입력한 카드 내용입니다.",
  dayMonthYearDate: "2025-07-15",
  relativeDate: "방금 전",
  uuid: "card-001" // 카드 자체의 uuid
}


export default function CardContainer() {
  return (
    <section className="mt-4">
      <Title>Example</Title>
      <div className="flex flex-wrap items-center justify-center p-4 mt-4">
        <Card
          key={myCard.uuid}
          card={myCard}
          className="m-2 overflow-hidden text-xs border-2 shadow-lg rounded-xl"
          minWidth="30rem"
          width="30rem"
        />
      </div>
    </section>
  )
}
