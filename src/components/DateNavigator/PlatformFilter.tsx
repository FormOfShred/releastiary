import { PLATFORMS } from "@/utils/platforms";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const PlatformFilter = ({setSelectedPlatform} : {setSelectedPlatform: (platform: number | undefined) => void;}) => {
  return (
    <div className="pt-5 justify-end flex">
      <Tabs defaultValue={0}>
        <TabsList>
          <TabsTrigger 
            value={0}
            onClick={() => setSelectedPlatform(undefined)}
          >
              All
          </TabsTrigger>
          { PLATFORMS.map((platform) => (
            <TabsTrigger 
              key={platform.id}
              value={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
            >
              {platform.name}
            </TabsTrigger>
          )) }
        </TabsList>
      </Tabs>
    </div>
  )
}

export default PlatformFilter;