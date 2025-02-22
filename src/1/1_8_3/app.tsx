export interface Story {
  id: string;
  label: string;
} 

const stories: Story[] = [];

export default function Wrapper() {
  return <StoryTray stories={stories} />;
}

function StoryTray({ stories }: { stories: Story[] }) {
  const allStories = [...stories, { id: 'create', label: 'Create Story' }];

  return (
    <ul>
      {allStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
