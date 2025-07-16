import {Button} from '../../theme/daisyui'

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center "></h2>
      <div className="flex justify-center mt-4 space-x-12">
        <button className="btn btn-primary bg-cyan-500 "> 홈 </button>
        <Button className="bg-red-500 btn-primary">소개 </Button>
        <button className="bg-yellow-500 btn btn-primary"> 연락 </button>
      </div>
    </section>
  )
}
