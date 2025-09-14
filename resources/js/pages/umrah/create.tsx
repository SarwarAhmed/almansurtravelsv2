import { Button } from '@/components/ui/button';
import Layout from '@/layouts/app-layout';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

export default function create({}) {
    return (
        <Layout>
            <Head title="Create Umrah Package" />

            <div className="px-4 py-4">
                <Form disableWhileProcessing className="flex flex-col gap-6">
                    {({ processing, errors }) => (
                        <>
                            <Button type="submit" className="mt-2 w-full">
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Create package
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </Layout>
    );
}
